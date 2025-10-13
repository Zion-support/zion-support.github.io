import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Users, Heart, Zap, Target } from 'lucide-react';

const CareersPage: React.FC = () => {
  const benefits = [{
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness programs.'
    },
    {
      icon: Zap,
      title: 'Learning & Development',
      description: 'Continuous learning opportunities, conferences, and professional development budget.'
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Work with talented professionals in an inclusive and innovative environment.'
    },
    {
      icon: Target,
      title: 'Career Growth',
      description: 'Clear career paths, mentorship programs, and opportunities for advancement.'
    }
  ];

  const openPositions = [{
      title: 'Senior AI Engineer',
      location: 'Remote / Delaware',
      type: 'Full-time',
      department: 'Engineering',
      description: 'Lead AI model development and implementation for enterprise clients.'
    },
    {
      title: 'Cloud Solutions Architect',
      location: 'Remote / Delaware',
      type: 'Full-time',
      department: 'Engineering',
      description: 'Design and implement scalable cloud infrastructure solutions.'
    },
    {
      title: 'Cybersecurity Specialist',
      location: 'Remote / Delaware',
      type: 'Full-time',
      department: 'Security',
      description: 'Protect client systems and data with advanced security measures.'
    },
    {
      title: 'Product Manager',
      location: 'Remote / Delaware',
      type: 'Full-time',
      department: 'Product',
      description: 'Drive product strategy and roadmap for our AI and IT solutions.'
    },
    {
      title: 'Sales Engineer',
      location: 'Remote / Delaware',
      type: 'Full-time',
      department: 'Sales',
      description: 'Help clients understand and implement our technology solutions.'
    },
    {
      title: 'UX/UI Designer',
      location: 'Remote / Delaware',
      type: 'Full-time',
      department: 'Design',
      description: 'Create intuitive and engaging user experiences for our products.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of AI and IT professionals. Explore career opportunities at Zion Tech Group and help shape the future of technology." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, cybersecurity, product manager, remote work" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Be part of a team that's shaping the future of AI and IT solutions.
              Work on cutting-edge projects and make a real impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                View Open Positions
              </button>
              <button className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                Learn About Our Culture
              </button>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Work With Us?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer more than just a job - we provide a platform for growth, innovation, and impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Open Positions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover exciting opportunities to join our growing team.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-white">
                      {position.title}
                    </h3>
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                      {position.type}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-gray-300 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="mr-4">{position.location}</span>
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{position.department}</span>
                  </div>
                  
                  <p className="text-gray-300 mb-6">
                    {position.description}
                  </p>
                  
                  <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture & Values */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Culture & Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We believe in creating an environment where everyone can thrive and contribute to our mission.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Collaboration</h3>
                <p className="text-gray-300">
                  We work together as one team, sharing knowledge and supporting each other's growth.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
                <p className="text-gray-300">
                  We encourage creative thinking and embrace new technologies to solve complex problems.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Excellence</h3>
                <p className="text-gray-300">
                  We strive for the highest quality in everything we do, delivering exceptional results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Make an Impact?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join us in building the future of AI and IT solutions. We're looking for passionate individuals who want to make a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                  View All Positions
                </button>
                <button className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* General Application */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">Don't See Your Perfect Role?</h2>
              <p className="text-gray-300 mb-6">
                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <button className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-rose-600 hover:to-pink-600 transition-all duration-300">
                Submit General Application
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersPage;
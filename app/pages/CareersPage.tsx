import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  MapPinIcon,
  ClockIcon,
  UserGroupIcon,
  HeartIcon,
  BoltIcon,
  TargetIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const CareersPage: React.FC = () => {
  const benefits = [
    {
      icon: HeartIcon,
      title: 'Work-Life Balance',
      description: 'Flexible hours and remote work options to help you maintain a healthy work-life balance.'
    },
    {
      icon: BoltIcon,
      title: 'Growth Opportunities',
      description: 'Continuous learning and career development opportunities in cutting-edge technologies.'
    },
    {
      icon: UserGroupIcon,
      title: 'Collaborative Team',
      description: 'Work with talented professionals who are passionate about technology and innovation.'
    },
    {
      icon: TargetIcon,
      title: 'Impact-Driven',
      description: 'Make a real difference by working on projects that solve real-world problems.'
    }
  ];

  const openPositions = [
    {
      title: 'Senior AI Engineer',
      type: 'Full-time',
      location: 'Remote',
      department: 'Engineering',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.'
    },
    {
      title: 'Cloud Solutions Architect',
      type: 'Full-time',
      location: 'Remote',
      department: 'Engineering',
      description: 'Design and implement scalable cloud infrastructure solutions for our clients.'
    },
    {
      title: 'Cybersecurity Specialist',
      type: 'Full-time',
      location: 'Remote',
      department: 'Security',
      description: 'Protect our clients\' digital assets with advanced security solutions and monitoring.'
    },
    {
      title: 'Frontend Developer',
      type: 'Full-time',
      location: 'Remote',
      department: 'Engineering',
      description: 'Create beautiful and responsive user interfaces for our web applications.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of AI and IT experts. Explore career opportunities at Zion Tech Group and be part of the future of technology." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, cybersecurity, remote work, technology careers" />
        <meta property="og:title" content="Careers - Zion Tech Group" />
        <meta property="og:description" content="Join our team and help us build the future of technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/careers" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20 animated-grid"></div>
        </div>
        
        {/* Hero Section */}
        <section className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text neon-text">
              Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400">Team</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Be part of a team that's shaping the future of AI and IT solutions. 
              Work on cutting-edge projects and make a real impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Apply Now
              </Link>
              <Link
                to="/about"
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12 gradient-text">
              Why Work With Us?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark text-center">
                    <div className="p-4 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full w-fit mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                    <p className="text-gray-300 text-sm">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12 gradient-text">
              Open Positions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {openPositions.map((position, index) => (
                <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-xl font-semibold text-white">{position.title}</h3>
                    <span className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm">
                      {position.type}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-400 mb-4">
                    <MapPinIcon className="w-4 h-4 mr-2" />
                    <span className="text-sm">{position.location}</span>
                    <span className="mx-2">•</span>
                    <span className="text-sm">{position.department}</span>
                  </div>
                  <p className="text-gray-300 mb-6">{position.description}</p>
                  <Link 
                    to="/contact"
                    className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-3 px-4 rounded-lg font-medium hover:from-rose-600 hover:to-pink-600 transition-all duration-300 text-center block transform hover:scale-105"
                  >
                    Apply Now
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
          <div className="container mx-auto px-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h2 className="text-4xl font-bold text-white text-center mb-12 gradient-text">Our Culture</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="p-4 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full w-fit mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <UserGroupIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Collaborative</h3>
                  <p className="text-gray-300">We believe in the power of teamwork and open communication to achieve great things.</p>
                </div>
                <div className="text-center group">
                  <div className="p-4 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full w-fit mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <BoltIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Innovative</h3>
                  <p className="text-gray-300">We encourage creative thinking and embrace new technologies to solve complex problems.</p>
                </div>
                <div className="text-center group">
                  <div className="p-4 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full w-fit mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <TargetIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Impact-Driven</h3>
                  <p className="text-gray-300">We focus on delivering real value to our clients and making a positive impact.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">Don't See Your Perfect Role?</h2>
              <p className="text-gray-300 mb-8">
                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-rose-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
              >
                Send Resume
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersPage;
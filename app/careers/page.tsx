'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, MapPin, Clock, Users, Heart, Zap, Globe, Award } from 'lucide-react';

const CareersPage: React.FC = () => {
  const positions = [
    {
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '5+ years',
      posted: '2 days ago',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.'
    },
    {
      title: 'Cloud Solutions Architect',
      department: 'Cloud Services',
      location: 'Remote',
      type: 'Full-time',
      experience: '7+ years',
      posted: '1 week ago',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.'
    },
    {
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '3+ years',
      posted: '3 days ago',
      description: 'Build responsive and interactive user interfaces using React and modern web technologies.'
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Austin, TX',
      type: 'Full-time',
      experience: '4+ years',
      posted: '5 days ago',
      description: 'Manage CI/CD pipelines and ensure reliable deployment of applications.'
    },
    {
      title: 'Data Scientist',
      department: 'Data & Analytics',
      location: 'Seattle, WA',
      type: 'Full-time',
      experience: '4+ years',
      posted: '1 week ago',
      description: 'Analyze complex datasets and develop predictive models to drive business insights.'
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      experience: '6+ years',
      posted: '4 days ago',
      description: 'Lead product strategy and roadmap for our AI-powered solutions platform.'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'Flexible hours and remote work options'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Cutting-edge technology and continuous learning'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Make a difference worldwide with your work'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Competitive compensation and growth opportunities'
    }
  ];

  const benefits = [
    'Competitive salary and equity package',
    'Comprehensive health, dental, and vision insurance',
    '401(k) with company matching',
    'Unlimited PTO and flexible work arrangements',
    'Professional development budget',
    'Top-tier equipment and home office setup',
    'Team building events and company retreats',
    'Mentorship and career growth opportunities'
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join our team at Zion Tech Group. Explore exciting career opportunities in AI, technology, and innovation. We're looking for passionate professionals to help shape the future." />
        <meta name="keywords" content="careers, jobs, employment, AI engineer, software developer, technology careers, remote work, benefits, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/careers" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Join Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                {" "}Team
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Build the future with cutting-edge technology. Join our team of passionate professionals 
              and help shape the next generation of AI and IT solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Positions Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Open Positions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover exciting career opportunities and join our team of innovators.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {positions.map((position) => (
                <div
                  key={position.title}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {position.title}
                    </h3>
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 text-sm rounded-full">
                      {position.type}
                    </span>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-300">
                      <MapPin className="w-4 h-4 mr-2 text-cyan-400" />
                      {position.location}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Clock className="w-4 h-4 mr-2 text-cyan-400" />
                      {position.experience}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Users className="w-4 h-4 mr-2 text-cyan-400" />
                      {position.department}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {position.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {position.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Join Us?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer competitive benefits and a supportive work environment that fosters growth and innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-gray-300 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join our team and help us build the future of technology. We're looking for passionate individuals 
              who want to make a difference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Apply Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Learn More About Us
                <Globe className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersPage;

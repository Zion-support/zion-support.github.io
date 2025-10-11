'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Star, Users, Heart, Award, MapPin, Clock, Briefcase, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'AI Solutions',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Design and implement cutting-edge AI solutions for enterprise clients.',
      requirements: ['Python, TensorFlow, PyTorch', '5+ years AI experience', 'Machine Learning expertise']
    },
    {
      title: 'Cloud Architect',
      department: 'Cloud Services',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: ['AWS, Azure, GCP', '7+ years cloud experience', 'Architecture certifications']
    },
    {
      title: 'Data Scientist',
      department: 'Data Analytics',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Extract insights from complex datasets to drive business decisions.',
      requirements: ['Python, R, SQL', '3+ years data science experience', 'Statistical analysis skills']
    }
  ];

  const benefits = [
    'Competitive salary and equity',
    'Comprehensive health insurance',
    'Flexible work arrangements',
    'Professional development budget',
    'Top-tier equipment and tools',
    'Team building events',
    'Career growth opportunities'
  ];

  const values = [
    {
      icon: Star,
      title: 'Innovation',
      description: 'We push the boundaries of what\'s possible with technology'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work together to achieve extraordinary results'
    },
    {
      icon: Heart,
      title: 'Impact',
      description: 'We create solutions that make a real difference'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Join our team and work on cutting-edge AI and IT solutions. Explore open positions and career opportunities at Zion Tech Group." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, data scientist, technology careers" />
        <meta property="og:title" content="Careers - Zion Tech Group" />
        <meta property="og:description" content="Join our team and work on cutting-edge AI and IT solutions." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Careers - Zion Tech Group" />
        <meta name="twitter:description" content="Join our team and work on cutting-edge AI and IT solutions." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-32">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center neon-text">
              Join Our Team
            </h1>
            
            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Work on cutting-edge AI and IT solutions that transform businesses worldwide.
            </p>

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Open Positions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                {openPositions.map((position, index) => (
                  <div key={index} className="cyber-card-enhanced hover-lift group">
                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                          {position.title}
                        </h3>
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                          {position.type}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Briefcase className="w-4 h-4" />
                          <span>{position.department}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{position.experience}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {position.description}
                      </p>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-2">Requirements:</h4>
                        <ul className="space-y-1">
                          {position.requirements?.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-center text-sm text-gray-300">
                              <ArrowRight className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group">
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Work With Us?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {values.map((value, index) => (
                  <div key={index} className="cyber-card-enhanced hover-lift group text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Benefits & Perks</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 group"
                >
                  Get in Touch
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </section>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default CareersPage;
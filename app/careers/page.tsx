'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Star, Users, Heart, Award, MapPin, Clock, Briefcase, CheckCircle, ArrowRight } from 'lucide-react';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
  posted: string;
  featured: boolean;
}

const CareersPage: React.FC = () => {
  const openPositions: JobPosition[] = [
    {
      id: '1',
      title: 'Senior AI Engineer',
      department: 'AI & Machine Learning',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years experience in AI/ML',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, GCP, Azure)'
      ],
      benefits: [
        'Competitive salary: $120,000 - $180,000',
        'Equity participation',
        'Flexible remote work',
        'Professional development budget'
      ],
      posted: '2 days ago',
      featured: true
    },
    {
      id: '2',
      title: 'Cloud Architect',
      department: 'Cloud Services',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: [
        'AWS, Azure, GCP certifications',
        '7+ years cloud experience',
        'Architecture design expertise',
        'Strong communication skills'
      ],
      benefits: [
        'Competitive salary: $140,000 - $200,000',
        'Health insurance',
        '401k matching',
        'Flexible PTO'
      ],
      posted: '1 week ago',
      featured: false
    },
    {
      id: '3',
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect our clients\' digital assets and ensure compliance with security standards.',
      requirements: [
        'CISSP or similar certification',
        '4+ years security experience',
        'Knowledge of security frameworks',
        'Incident response experience'
      ],
      benefits: [
        'Competitive salary: $100,000 - $150,000',
        'Remote work flexibility',
        'Security training budget',
        'Health and dental insurance'
      ],
      posted: '3 days ago',
      featured: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and help shape the future of AI and IT solutions. Explore open positions and discover opportunities to grow your career with us." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, cybersecurity, remote work, tech jobs" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Join Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Team
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Help us build the future of AI and IT solutions. We're looking for passionate 
                individuals who want to make a difference in the tech industry.
              </p>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Why Work With Us?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer more than just a job - we provide opportunities to grow, learn, 
                and make a real impact in the world of technology.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Great Culture</h3>
                <p className="text-gray-300">
                  Work in a supportive, inclusive environment where your ideas matter 
                  and your contributions are valued.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Growth Opportunities</h3>
                <p className="text-gray-300">
                  Continuous learning and development opportunities to advance your 
                  career and expand your skills.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Flexible Work</h3>
                <p className="text-gray-300">
                  Remote work options, flexible hours, and work-life balance to help 
                  you thrive both personally and professionally.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Open Positions</h2>
              <p className="text-xl text-gray-300">
                Explore our current openings and find the perfect role for you.
              </p>
            </div>
            <div className="space-y-8">
              {openPositions.map((position) => (
                <div
                  key={position.id}
                  className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-slate-700/50 transition-all duration-300 ${
                    position.featured ? 'ring-2 ring-cyan-400' : ''
                  }`}
                >
                  {position.featured && (
                    <div className="flex items-center mb-4">
                      <span className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Featured
                      </span>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                      <p className="text-gray-300 mb-4">{position.description}</p>
                      
                      <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-400">
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-2" />
                          {position.department}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {position.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {position.type}
                        </div>
                        <div className="flex items-center">
                          <Award className="w-4 h-4 mr-2" />
                          {position.experience}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {position.requirements.map((req, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                      <ul className="space-y-2 mb-6">
                        {position.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="text-sm text-gray-400 mb-4">
                        Posted {position.posted}
                      </div>
                      
                      <Link
                        to={`/careers/${position.id}`}
                        className="w-full bg-cyan-600 text-white py-3 px-6 rounded-lg hover:bg-cyan-700 transition-colors font-semibold flex items-center justify-center"
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Don't See Your Role?</h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented individuals. Send us your resume and 
              let us know how you can contribute to our team.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors text-lg"
            >
              <Heart className="w-5 h-5 mr-2" />
              Get in Touch
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersPage;
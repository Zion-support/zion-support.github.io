'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { MapPin, Clock, Users, ArrowRight, CheckCircle } from 'lucide-react';

const CareersPage: React.FC = () => {
<<<<<<< HEAD
  const openPositions = const openPositions = const openPositions = [
=======
  const jobs = [
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
    {
      title: 'Senior AI Engineer',
      department: 'AI Solutions',
      location: 'Remote',
      type: 'Full-time',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.'
    },
    {
      title: 'Cloud Solutions Architect',
      department: 'Cloud Services',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.'
    },
    {
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Protect our clients from cyber threats and ensure compliance with security standards.'
    },
    {
      title: 'Full Stack Developer',
      department: 'Development',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build innovative web applications and mobile solutions using modern technologies.'
    },
    {
      title: 'Data Scientist',
      department: 'Analytics',
      location: 'Austin, TX',
      type: 'Full-time',
<<<<<<< HEAD
      experience: '3+ years',
      description: 'Extract insights from complex datasets to drive business decisions.',
        requirements: ['Python, R, SQL', '3+ years data science experience', 'Statistical analysis skills'];
      };
    ];
  const benefits = const benefits = const benefits = [
=======
      description: 'Extract insights from data and develop predictive models for business intelligence.'
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Seattle, WA',
      type: 'Full-time',
      description: 'Automate deployment processes and maintain reliable infrastructure systems.'
    }
  ];

  const benefits = [
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
    'Competitive salary and equity',
    'Comprehensive health insurance',
    'Flexible work arrangements',
    'Professional development budget',
    'Unlimited vacation policy',
    'Top-tier equipment and tools',
<<<<<<< HEAD
    'Team building events',;
      'Career growth opportunities';
  ];
  const values = const values = const values = [
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
        description: 'We strive for the highest quality in everything we do';
      };
    ];
  return ()
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" / /></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} / /></div>
        <div className="relative max-w-7xl mx-auto text-center" /></div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" /></h1>
            Join Our Team
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" /></p>
            Work on cutting-edge AI and IT solutions that transform businesses worldwide.
          </p>
        </div>
      </section>

      <section className="py-20 px-4" /></section>
        <div className="max-w-7xl mx-auto" /></div>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Open Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16" /></div>
            {openPositions.map((position, index) => ()
                    {position.requirements?.map((req, reqIndex) => ()
                    ))}
                  </ul>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center" /></button>
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-2" / /></ArrowRight>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white/5" /></section>
        <div className="max-w-7xl mx-auto" /></div>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16" /></div>
            {values.map((value, index) => ()
            ))}
=======
    'Team building events',
    'Career growth opportunities'
  ];

  return (
    <>
      <Helmet>
        <title>Careers | Zion Tech Group - AI & IT Solutions</title>
        <meta name="description" content="Join our team of experts in AI, cloud computing, and cybersecurity. Explore career opportunities at Zion Tech Group and help shape the future of technology." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, cybersecurity, developer, data scientist, tech careers" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Join Our Team
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Help us build the future of technology. Join a team of passionate experts working on cutting-edge AI and IT solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Work With Us?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer a comprehensive benefits package and a supportive work environment.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                  <CheckCircle className="w-8 h-8 text-cyan-500 mx-auto mb-4" />
                  <p className="text-gray-700 font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Open Positions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our current job openings and find the perfect role for you.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {jobs.map((job, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {job.title}
                    </h3>
                    <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium">
                      {job.type}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="mr-4">{job.location}</span>
                    <Users className="w-4 h-4 mr-2" />
                    <span>{job.department}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {job.description}
                  </p>
                  
                  <button className="flex items-center text-cyan-600 hover:text-cyan-700 font-medium">
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Culture
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  At Zion Tech Group, we believe in fostering a culture of innovation, collaboration, and continuous learning. Our team is made up of passionate individuals who are committed to pushing the boundaries of technology.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  We value diversity, creativity, and the unique perspectives that each team member brings. Join us in building a workplace where everyone can thrive and make a meaningful impact.
                </p>
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Learn More About Our Culture
                </button>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">What We're Looking For</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    Passion for technology and innovation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    Strong problem-solving skills
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    Collaborative mindset
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    Continuous learning attitude
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    Excellent communication skills
                  </li>
                </ul>
              </div>
            </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
          </div>
        </section>

<<<<<<< HEAD
      <section className="py-20 px-4" /></section>
        <div className="max-w-4xl mx-auto text-center" /></div>
          <h2 className="text-3xl font-bold text-white mb-8">Benefits & Perks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8" /></div>
            {benefits.map((benefit, index) => ()
            ))}
          </div>
          <div className="mt-8" /></div>
            <Link to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300" /></Link>
              Get in Touch
              <ArrowRight className="w-5 h-5 ml-2" / /></ArrowRight>
            </Link>
          </div>
        </div>
      </section>
    </div>
=======
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Join Us?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Don't see a position that matches your skills? We're always looking for talented individuals to join our team.
            </p>
            <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Send Us Your Resume
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
  );
};

export default CareersPage;
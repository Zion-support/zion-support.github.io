import { Helmet } from 'react-helmet-async';
import React from 'react';

export default function Careers() 
    },
    
    },
    
    }
  ];

  const benefits = [
    { icon: <Users className="w-6 h-6" />, title: 'Remote Work', description: 'Work from anywhere with flexible hours' },
    { icon: <Star className="w-6 h-6" />, title: 'Career Growth', description: 'Opportunities for advancement and skill development' },
    { icon: <Briefcase className="w-6 h-6" />, title: 'Competitive Salary', description: 'Attractive compensation packages' },
    { icon: <CheckCircle className="w-6 h-6" />, title: 'Health Benefits', description: 'Comprehensive health and wellness benefits' }
  ];

  return (
    <>
      <Helmet />
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of innovative professionals building the future of technology. Explore career opportunities at Zion Tech Group." />
        <meta name="keywords" content="careers, jobs, technology, AI, software development, cybersecurity, remote work" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white" />
        {/* Hero Section */}
        <section className="py-20 px-4" />
          <div className="max-w-7xl mx-auto text-center" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400" />
                Join Our Team
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" />
              Be part of a dynamic team that's shaping the future of technology. 
              We're looking for passionate individuals who want to make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" />
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group" />
                View Open Positions
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300" />
                Learn About Us
              </button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4" />
          <div className="max-w-7xl mx-auto" />
            <h2 className="text-3xl font-bold text-center mb-12" />
              Why Work With Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" />
              
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300" />
                  <div className="text-cyan-400 mb-4 flex justify-center" />
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings Section */}
        <section className="py-16 px-4" />
          <div className="max-w-7xl mx-auto" />
            <h2 className="text-3xl font-bold text-center mb-12" />
              Current Openings
            </h2>
            <div className="space-y-8" />
              
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300" />
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6" />
                    <div />
                      <h3 className="text-2xl font-bold text-cyan-400 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-300" />
                        <span className="flex items-center" />
                          <Briefcase className="w-4 h-4 mr-2" />
                          {job.department}
                        </span>
                        <span className="flex items-center" />
                          <MapPin className="w-4 h-4 mr-2" />
                          {job.location}
                        </span>
                        <span className="flex items-center" />
                          <Clock className="w-4 h-4 mr-2" />
                          {job.type}
                        </span>
                        <span className="flex items-center" />
                          <Users className="w-4 h-4 mr-2" />
                          {job.experience}
                        </span>
                      </div>
                    </div>
                    <button className="mt-4 lg:mt-0 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300" />
                      Apply Now
                    </button>
                  </div>
                  <p className="text-gray-300 mb-4">{job.description}</p>
                  <div />
                    <h4 className="text-lg font-semibold mb-3 text-cyan-400">Requirements:</h4>
                    <ul className="space-y-2" />
                      
                        <li key={reqIndex} className="flex items-start text-gray-300" />
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4" />
          <div className="max-w-4xl mx-auto text-center" />
            <h2 className="text-3xl font-bold mb-6" />
              Don't See Your Perfect Role?
            </h2>
            <p className="text-xl text-gray-300 mb-8" />
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group mx-auto" />
              Send Your Resume
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

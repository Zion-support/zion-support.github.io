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
  featured: boolean;)
}

const CareersPage: React.FC = () => {
  const openPositions: JobPosition[] = [
    {
      id: '1',
      title: 'Senior AI Engineer',
      department: 'AI Solutions',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.',
      requirements: [
        '5+ years experience in AI/ML development',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong understanding of deep learning algorithms',
        'Previous experience in production AI systems'
      ],
      benefits: [
        'Competitive salary: $120,000 - $180,000',
        'Equity participation',
        'Flexible remote work',
        'Professional development budget'
      ],
      posted: '2 days ago',
      featured: true;)
},
    {
      id: '2',
      title: 'Cloud Architect',
      department: 'Cloud Services',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: ['AWS, Azure, GCP', '7+ years cloud experience', 'Architecture certifications']})
}
  ];

  const benefits = [
    'Competitive salary and equity',
    'Comprehensive health insurance',
    'Flexible work arrangements',
    'Professional development budget',
    'Top-tier equipment and tools',
    'Team building events',
    'Career growth opportunities',
    '401k matching program',
    'Unlimited PTO',
    'Mental health support'
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We push the boundaries of what\'s possible with technology',
      color: 'text-yellow-400'})
},
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work together to achieve extraordinary results',
      color: 'text-blue-400'})
},
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do',
      color: 'text-green-400'})
},
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We build trust through transparency and honesty',
      color: 'text-red-400'})
}
  ];

  const culture = [
    {
      stat: '98%',
      label: 'Employee Satisfaction',
      description: 'Our team loves working here'})
},
    {
      stat: '50+',
      label: 'Team Members',
      description: 'Growing team of experts'})
},
    {
      stat: '15+',
      label: 'Countries',
      description: 'Global remote team'})
},
    {
      stat: '4.9/5',
      label: 'Glassdoor Rating',
      description: 'Highly rated workplace'})
}
  ];

  return (
    <>
      <Helmet></Helmet>
        <title></titl>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join our team of AI and IT experts. Explore career opportunities at Zion Tech Group and be part of the future of technology." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, cybersecurity, remote work, technology careers" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></di></div>
        {/* Hero Section */}
        <section className="py-20 px-4"></sectio></section>
          <div className="max-w-7xl mx-auto text-center"></di></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
              Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"></spa>Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12"></p>
              Be part of the future of technology. Join our team of innovators, creators, and problem-solvers who are building the next generation of AI and IT solutions.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"></di></div>
              {culture.map((item, index) => (
                <div key={index} className="text-center"></di></div>
                  <div className="text-3xl font-bold text-white mb-2"></di>{item.stat}</div>
                  <div className="text-gray-400 text-sm"></di>{item.label}</div>
                  <div className="text-gray-500 text-xs mt-1"></di>{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-16 px-4"></sectio></section>
          <div className="max-w-7xl mx-auto"></di></div>
            <div className="text-center mb-16"></di></div>
              <h2 className="text-3xl font-bold text-white mb-6"></h>Our Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                These core values guide everything we do and shape our company culture.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></di></div>
              {values.map((value, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:border-purple-400 transition-all duration-300"></di></div>
                  <div className={`w-16 h-16 ${value.color} bg-white/10 rounded-full mx-auto mb-6 flex items-center justify-center`}></di></div>
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h3 className={`text-xl font-bold ${value.color} mb-4`}></h>{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4"></sectio></section>
          <div className="max-w-7xl mx-auto"></di></div>
            <div className="text-center mb-16"></di></div>
              <h2 className="text-3xl font-bold text-white mb-6"></h>Benefits & Perks</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                We offer comprehensive benefits and perks to support our team members' well-being and growth.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"></di></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></di></div>
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3"></di></div>
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300"></spa>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 px-4"></sectio></section>
          <div className="max-w-7xl mx-auto"></di></div>
            <div className="text-center mb-16"></di></div>
              <h2 className="text-3xl font-bold text-white mb-6"></h>Open Positions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Explore our current job openings and find the perfect role for you.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"></di></div>
              {openPositions.map((position) => (
                <div
                  key={position.id}
                  className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                    position.featured ? 'border-purple-400 shadow-2xl shadow-purple-500/25' : 'border-white/20'})
} hover:border-purple-400 transition-all duration-300 group`}
                ></di></div>
                  {position.featured && (
                    <div className="flex items-center gap-2 mb-4"></di></div>
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="text-yellow-400 text-sm font-semibold"></spa>Featured Position</span>
                    </div>
                  )}

                  <div className="flex items-start justify-between mb-4"></di></div>
                    <div></di></div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors"></h3>
                        {position.title}
                      </h3>
                      <p className="text-cyan-400 font-medium">{position.department}</p>
                    </div>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full"></span>
                      {position.type}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-6">{position.description}</p>

                  <div className="flex items-center gap-4 mb-6 text-sm text-gray-400"></di></div>
                    <div className="flex items-center gap-1"></di></div>
                      <MapPin className="w-4 h-4" />
                      <span></spa>{position.location}</span>
                    </div>
                    <div className="flex items-center gap-1"></di></div>
                      <Clock className="w-4 h-4" />
                      <span></spa>{position.experience}</span>
                    </div>
                    <div className="flex items-center gap-1"></di></div>
                      <Users className="w-4 h-4" />
                      <span></spa>Posted {position.posted}</span>
                    </div>
                  </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4"></sectio></section>
          <div className="max-w-4xl mx-auto text-center"></di></div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20"></di></div>
              <h2 className="text-3xl font-bold text-white mb-6"></h2>
                Don't See Your Dream Job?
              </h2>
              <p className="text-xl text-gray-300 mb-8"></p>
                We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></di></div>
                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"></button>
                  <Zap className="w-5 h-5" />
                  Send Resume
                </button>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                ></Link>
                  Contact Us
                </Link>
              </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5"></sectio></section>
          <div className="max-w-7xl mx-auto"></di></div>
            <h2 className="text-3xl font-bold text-white mb-12 text-center"></h>Why Work With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></di></div>
              {values.map((value, index) => (
                <div key={index} className="text-center"></di></div>
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"></di></div>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2"></h>{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits List */}
        <section className="py-20 px-4"></sectio></section>
          <div className="max-w-7xl mx-auto"></di></div>
            <h2 className="text-3xl font-bold text-white mb-12 text-center"></h>Benefits & Perks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></di></div>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3"></di></div>
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-lg"></spa>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4"></sectio></section>
          <div className="max-w-4xl mx-auto text-center"></di></div>
            <h2 className="text-3xl font-bold text-white mb-4"></h2>
              Ready to Join Us?
            </h2>
            <p className="text-gray-300 text-lg mb-8"></p>
              Don't see a position that fits? We're always looking for talented individuals. 
              Send us your resume and let's start a conversation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold py-3 px-8 rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-200"
            ></Link>
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  ));)
};

export default CareersPage;
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
  featured: boolean});
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
      featured: true});
},
    {
      id: '2',
      title: 'Cloud Architect',
      department: 'Cloud Services',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: ['AWS, Azure, GCP', '7+ years cloud experience', 'Architecture certifications']});;)
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
      color: 'text-yellow-400'});;)
},
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work together to achieve extraordinary results',
      color: 'text-blue-400'});;)
},
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do',
      color: 'text-green-400'});;)
},
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We build trust through transparency and honesty',
      color: 'text-red-400'});;)
}
  ];

  const culture = [
    {
      stat: '98%',
      label: 'Employee Satisfaction',
      description: 'Our team loves working here'});;)
},
    {
      stat: '50+',
      label: 'Team Members',
      description: 'Growing team of experts'});;)
},
    {
      stat: '15+',
      label: 'Countries',
      description: 'Global remote team'});;)
},
    {
      stat: '4.9/5',
      label: 'Glassdoor Rating',
      description: 'Highly rated workplace'});;)
}
  ];

  return (
    <>
      <Helmet></Helmet>
        <titl></titl>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join our team of AI and IT experts. Explore career opportunities at Zion Tech Group and be part of the future of technology." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, cybersecurity, remote work, technology careers" />
      </Helmet>

      <div></div>
        {/* Hero Section */}
        <section></section>
          <div></div>
            <h1></h1>
              Join Our <spa></spa>Team</span>
            </h1>
            <p></p>
              Be part of the future of technology. Join our team of innovators, creators, and problem-solvers who are building the next generation of AI and IT solutions.
            </p>

            <div></div>
              {culture.map((item, index) => (
                <div></div>
                  <di></di>{item.stat}</div>
                  <di></di>{item.label}</div>
                  <di></di>{item.description}</div>
                </div>
              ));
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section></section>
          <div></div>
            <div></div>
              <h></h>Our Values</h2>
              <p></p>
                These core values guide everything we do and shape our company culture.
              </p>
            </div>

            <div></div>
              {values.map((value, index) => (
                <div></div>
                  <div></div>
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h></h>{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ));
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section></section>
          <div></div>
            <div></div>
              <h></h>Benefits & Perks</h2>
              <p></p>
                We offer comprehensive benefits and perks to support our team members' well-being and growth.
              </p>
            </div>

            <div></div>
              <div></div>
                {benefits.map((benefit, index) => (
                  <div></div>
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <spa></spa>{benefit}</span>
                  </div>
                ));
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section></section>
          <div></div>
            <div></div>
              <h></h>Open Positions</h2>
              <p></p>
                Explore our current job openings and find the perfect role for you.
              </p>
            </div>

            <div></div>
              {openPositions.map((position) => (
                <div></div>
                  {position.featured && (
                    <div></div>
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <spa></spa>Featured Position</span>
                    </div>
                  );

                  <div></div>
                    <div></div>
                      <h3></h3>
                        {position.title}
                      </h3>
                      <p className="text-cyan-400 font-medium">{position.department}</p>
                    </div>
                    <span></span>
                      {position.type}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-6">{position.description}</p>

                  <div></div>
                    <div></div>
                      <MapPin className="w-4 h-4" />
                      <spa></spa>{position.location}</span>
                    </div>
                    <div></div>
                      <Clock className="w-4 h-4" />
                      <spa></spa>{position.experience}</span>
                    </div>
                    <div></div>
                      <Users className="w-4 h-4" />
                      <spa></spa>Posted {position.posted}</span>
                    </div>
                  </div>
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Requirements:</h4>
                    <ul className="space-y-1">
                      {position.requirements.slice(0, 3).map((req, index) => (
                        <li key={index} className="text-sm text-gray-300 flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                      {position.requirements.length > 3 && (
                        <li className="text-sm text-gray-400">
                          +{position.requirements.length - 3} more requirements
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">
                      {position.benefits.length} benefits included
                    </div>
                    <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-8a15
=======
                </div>
              ))}
            </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-550e
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-bba0
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-9948
          </div>
        </section>

        {/* CTA Section */}
        <section></section>
          <div></div>
            <div></div>
              <h2></h2>
                Don't See Your Dream Job?
              </h2>
              <p></p>
                We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our mission.
              </p>
              <div></div>
                <button></button>
                  <Zap className="w-5 h-5" />
                  Send Resume
                </button>
                <Link></Link>
                  Contact Us
                </Link>
              </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
                  {position.requirements && (
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-2">Key Requirements:</h4>
                      <ul className="space-y-1">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="text-gray-300 text-sm flex items-center">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Link
                    to="/contact"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
=======
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2 text-sm">Key Requirements:</h4>
                    <ul className="space-y-1">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="text-gray-300 text-xs flex items-start">
                          <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold py-2 px-4 rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-200 flex items-center justify-center gap-2">
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
>>>>>>> cursor/analyze-improve-and-deploy-application-a851
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-bba0
                </div>
              ));
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
          </div>
        </section>

        {/* Benefits Section */}
        <section></section>
          <div></div>
            <h></h>Why Work With Us?</h2>
            <div></div>
              {values.map((value, index) => (
                <div></div>
                  <div></div>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h></h>{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
<<<<<<< HEAD
              ))}
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-550e
=======
              ));
>>>>>>> cursor/fix-errors-and-merge-to-main-bba0
            </div>
          </div>
        </section>

        {/* Benefits List */}
        <section></section>
          <div></div>
            <h></h>Benefits & Perks</h2>
            <div></div>
              {benefits.map((benefit, index) => (
                <div></div>
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <spa></spa>{benefit}</span>
                </div>
              ));
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section></section>
          <div></div>
            <h2></h2>
              Ready to Join Us?
            </h2>
            <p></p>
              Don't see a position that fits? We're always looking for talented individuals. 
              Send us your resume and let's start a conversation.
            </p>
            <Link></Link>
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-8a15
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-9948
          </div>
        </section>
      </div>
    </>
  ));)
};

export default CareersPage;
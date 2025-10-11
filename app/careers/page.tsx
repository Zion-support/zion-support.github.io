'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
}

const CareersPage: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const positions: JobPosition[] = [
    {
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
>>>>>>> origin/main

  return (
    <>
      <Helmet>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Page
              </span>
            </h1>
            </div>
          </div>
        </section>
=======
  return (<div>
        <title>Careers - Zion Tech Group | Join Our Team<
        <meta name="description" content="Join Zion Tech Group and work on cutting-edge AI and IT solutions. Explore open positions, benefits, and our company culture." 
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, data scientist, DevOps, remote work, tech jobs" 
      <

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="relative py-20 px-4 overflow-hidden">)
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" 
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} 
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">
              Join Our Team
            <
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Work on cutting-edge AI and IT solutions that transform businesses worldwide.
            <
          <
        <
>>>>>>> cursor/fix-errors-and-merge-to-main-e8e3

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
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-068b
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Expert Solutions</h3>
                <p className="text-gray-300">Professional Page services with proven results</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock assistance for your business needs</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Custom Solutions</h3>
                <p className="text-gray-300">Tailored Page solutions for your specific requirements</p>
>>>>>>> origin/main
              </div>
            </div>
          </section>
        )}

                >
=======
                <div></div>
>>>>>>> main
                  {position.featured && (
                    <div></div>
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <spa></spa>Featured Position</span>
                    </div>
                  );

                        {position.title}
                      </h3>
                      <p className="text-cyan-400 font-medium">{position.department}</p>
                    </div>
=======
                    <span></span>
>>>>>>> main
                      {position.type}
                    <
                  <


                      <Clock className="w-4 h-4" />
                      <spa></spa>{position.experience}</span>
                    </div>
                    <div></div>
                      <Users className="w-4 h-4" />
                      <spa></spa>Posted {position.posted}</span>
                    </div>
                  </div>
                          {req}
                        <)
                      ))}
=======
                </div>
              ))}
            </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-550e
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-bba0
          </div>
        </section>

>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-068b
        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your Page needs and get a customized solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:from-cyan-300 hover:to-purple-300 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center gap-2 bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold border border-slate-600 hover:bg-slate-600 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
>>>>>>> origin/main
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
=======
  ));)
>>>>>>> main
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-068b
};


'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Star, Users, Heart, Award, MapPin, Clock, Briefcase, ArrowRight } from 'lucide-react';

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
        requirements: ['Python, R, SQL', '3+ years data science experience', 'Statistical analysis skills'];
      };
    ];
  const benefits = const benefits = const benefits = [
    'Competitive salary and equity',
    'Comprehensive health insurance',
    'Flexible work arrangements',
    'Professional development budget',
    'Top-tier equipment and tools',
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
          </div>
        </div>
      </section>

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
  );
};

export default CareersPage;

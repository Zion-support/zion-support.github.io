
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom;
import { AcademicCapIcon,;
  PlayIcon,';
  DocumentTextIcon,;';}
  ClockIcon,';}
  UserGroupIcon,';}
  ArrowRightIcon'}
} from '@heroicons/react/24/outline;

const TutorialsPage: React.FC = () => {
  const tutorials = [';
    {';
      id: 1,'
      title: 'Getting Started with AI Solutions','
      description: 'Learn the fundamentals of artificial intelligence and how to implement AI solutions in your business.','
      duration: '2 hours','}
      level: 'Beginner','}
      category: 'AI Solutions','}
      href: '/'}
    },
    {
      id: 2,'
      title: 'Cybersecurity Best Practices','
      description: 'Essential cybersecurity practices to protect your business from threats and vulnerabilities.','
      duration: '3 hours','}
      level: 'Intermediate','}
      category: 'Cybersecurity','}
      href: '/'}
    },
    {
      id: 3,'
      title: 'Cloud Infrastructure Setup','
      description: 'Step-by-step guide to setting up and managing cloud infrastructure for your business.','
      duration: '4 hours','}
      level: 'Advanced','}
      category: 'Cloud Computing','}
      href: '/'}
    },
    {
      id: 4,'
      title: '5G Technology Implementation','
      description: 'Understanding and implementing 5G technology solutions for modern businesses.','
      duration: '2.5 hours','}
      level: 'Intermediate','}
      category: '5G Solutions','}
      href: '/'}]
    }]
  ];
  return (
    <></>
      <Helmet></Helmet>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Comprehensive tutorials and guides for AI, cybersecurity, cloud computing, and digital transformation technologies." /></meta>
        <meta name="keywords" content="tutorials, AI learning, cybersecurity training, cloud computing guides, 5G technology" /></meta>
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white"></div>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
            <div className="text-center"></div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"></h1>
                Tutorials & Learning
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
                Master cutting-edge technologies with our comprehensive tutorials and guides designed for all skill levels.
              </p>
            </div>
          </div>
        </section>
        {/* Tutorials Grid */}
        <section className="py-20"></section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>)
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"></div>)
              {tutorials.map((tutorial) => (}
                <div key="{tutorial.id}" className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-all duration-300 group"></div>
                  <div className="flex items-center justify-between mb-4"></div>
                    <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full"></span>
                      {tutorial.category}
                    </span>
                    <span className="text-sm text-gray-400">{tutorial.level}</span>"
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition-colors"></h3>
                    {tutorial.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed"></p>
                    {tutorial.description}
                  </p>
                  
                  <div className="flex items-center justify-between"></div>
                    <div className="flex items-center text-gray-400 text-sm"></div>
                      <ClockIcon className="w-4 h-4 mr-1" /></ClockIcon>
                      {tutorial.duration}
                    </div>
                    
                    <Link
                      to="{tutorial.href;"
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium group-hover:gap-2 transition-all"
                    ></Link>
                      Start Tutorial
                      <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" /></ArrowRightIcon>}
                    </Link>}
                  </div>})
                </div>})
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 bg-slate-800"></section>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>
            <h2 className="text-4xl font-bold mb-6">Ready to Start Learning?</h2>
            <p className="text-xl text-gray-300 mb-8"></p>
              Join thousands of professionals who are advancing their careers with our expert-led tutorials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              ></Link>
                Get Started Today
              </Link>
              <Link;
                to="/demo"
                className="border-2 border-purple-400 text-purple-300 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              ></Link>
                Watch Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TutorialsPage;
'
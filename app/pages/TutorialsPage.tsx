
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom;
import { AcademicCapIcon,
  PlayIcon,
  DocumentTextIcon,
  ClockIcon,
  UserGroupIcon,
  ArrowRightIcon'
} from '@heroicons/react/24/outline;

const TutorialsPage: React.FC = () => {
  const tutorials = [
    {
      id: 1,'
          title: 'Getting Started with AI Solutions','
          description: 'Learn the fundamentals of artificial intelligence and how to implement AI solutions in your business.'
  },'
      duration: '2 hours','
      level: 'Beginner','
      category: 'AI Solutions','
      href: '/'
    },
    {
      id: 2,'
          title: 'Cybersecurity Best Practices','
          description: 'Essential cybersecurity practices to protect your business from threats and vulnerabilities.'
  },'
      duration: '3 hours','
      level: 'Intermediate','
      category: 'Cybersecurity','
      href: '/'
    },
    {
      id: 3,'
          title: 'Cloud Infrastructure Setup','
          description: 'Step-by-step guide to setting up and managing cloud infrastructure for your business.'
  },'
      duration: '4 hours','
      level: 'Advanced','
      category: 'Cloud Computing','
      href: '/'
    },
    {
      id: 4,'
          title: '5G Technology Implementation','
          description: 'Understanding and implementing 5G technology solutions for modern businesses.'
  },'
      duration: '2.5 hours','
      level: 'Intermediate','
      category: '5G Solutions','
      href: '/'
    }
  ];

  return (
    
    <div>
      <Helmet />
        <title>Tutorials - Zion Tech Group</title>
        <meta />
        <meta />
      </Helmet>
      
      <div />
        {/* Hero Section */}
        <section>
        <div>
          <div>
            <h1>Tutorials & Learning
              </h1></h1>
              <p />
                Master cutting-edge technologies with our comprehensive tutorials and guides designed for all skill levels.
              </p>
            </div>
          </div>
      </section>
        {/* Tutorials Grid */}
        <section>
        <div>
    <div />
              {tutorials.map((tutorial) => (
                <div>
    <div />
                    <span />
                      {tutorial.category}
                    </span>
                    <span className="text-sm text-gray-400">{tutorial.level}</span>"
                  </div>
                  
                  <h3 />
                    {tutorial.title}
                  </h3>
                  
                  <p />
                    {tutorial.description}
                  </p>
                  
                  <div>
    <div />
                      <ClockIcon />
                      {tutorial.duration}
                    </div>
                    
                    <Link />
                      Start Tutorial
                      <ArrowRightIcon />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </section>
        {/* CTA Section */}
        <section>
        <div>
    <h2 className="text-4xl font-bold mb-6">Ready to Start Learning?</h2>
            <p />
              Join thousands of professionals who are advancing their careers with our expert-led tutorials.
            </p>
            <div>
    <Link />
                Get Started Today
              </Link>
              <Link />
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
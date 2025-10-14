

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom;
import { PlayIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  GlobeAltIcon,
  SignalIcon,
  ArrowRightIcon,
  CheckIcon,
  PhoneIcon,
  EnvelopeIcon'
} from '@heroicons/react/24/outline;

const DemoPage: React.FC = () => {
  const demos = [
    {'
          title: 'AI Solutions Demo','
          description: 'Experience our AI-powered solutions in action with interactive demonstrations.'
  },
      icon: CpuChipIcon,
      features: ['
        'Machine Learning Models','
        'Natural Language Processing','
        'Computer Vision','
        'Predictive Analytics'
      ],'
      duration: '15 minutes'
    },
    {'
          title: 'Cybersecurity Demo','
          description: 'See how our security solutions protect your digital assets in real-time.'
  },
      icon: ShieldCheckIcon,
      features: ['
        'Threat Detection','
        'Vulnerability Assessment','
        'Security Monitoring','
        'Incident Response'
      ],'
      duration: '20 minutes'
    },
    {'
          title: 'Cloud Infrastructure Demo','
          description: 'Explore our cloud solutions and infrastructure management capabilities.'
  },
      icon: CloudIcon,
      features: ['
        'Cloud Migration','
        'Auto-scaling','
        'Disaster Recovery','
        'Cost Optimization'
      ],'
      duration: '25 minutes'
    },
    {'
          title: 'Micro SaaS Demo','
          description: 'Discover our custom micro SaaS applications and their capabilities.'
  },
      icon: GlobeAltIcon,
      features: ['
        'Custom Development','
        'API Integration','
        'User Management','
        'Analytics Dashboard'
      ],'
      duration: '18 minutes'
    },
    {'
          title: '5G Technology Demo','
          description: 'Experience the power of 5G technology and IoT solutions.'
  },
      icon: SignalIcon,
      features: ['
        '5G Network Implementation','
        'IoT Device Management','
        'Edge Computing','
        'Real-time Processing'
      ],'
      duration: '22 minutes'
    }
  ];

  return (
    
    <React />
      <Helmet />
        <title>Demo - Zion Tech Group</title>
        <meta />
        <meta />
      </Helmet>

      {/* Hero Section */}
      <section>
        <div>
    <div />
  </div>
  <div>
    <div />
            <h1>Experience Our Solutions
            </h1></h1>
            <p />
              Interactive Demos of Our Technology
            </p>
            <p />
              See our AI, cybersecurity, cloud infrastructure, and other solutions in action. 
              Schedule a personalized demo to explore how our technology can transform your business.
            </p>
            <Link />
              Schedule Demo
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* Demo Grid */}
      <section>
        <div>
    <div />
            <h2 />
              Available Demos
            </h2>
            <p />
              Choose from our comprehensive range of technology demonstrations
            </p>
          </div>
          
          <div />
            {demos.map((demo, index) => (
              <div>
    <div />
                  <div>
    <demo />
                  </div>
                  <div />
                    <h3 className="text-2xl font-bold text-white">{demo.title}</h3>
                    <p className="text-purple-400 text-sm">{demo.duration}</p>
                  </div>
  </div>
  <p />
                  {demo.description}
                </p>
                
                <ul />
                  {demo.features.map((feature, featureIndex) => (
                    <li />
                      <CheckIcon />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link />
                  Schedule Demo
                  <ArrowRightIcon />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section>
        <div>
    <h2 className="text-4xl font-bold mb-6">Ready to See Our Solutions in Action?</h2>
          <p />
            Schedule a personalized demo tailored to your business needs
          </p>
          
          <div>
    <div />
              <PhoneIcon />
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-gray-300 text-lg">+1-302-464-0950</p>
              <p className="text-gray-400 text-sm">Available 24/7</p>
            </div>
            <div>
    <EnvelopeIcon />
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-gray-300 text-lg">kleber@ziontechgroup.com</p>
              <p className="text-gray-400 text-sm">Quick response guaranteed</p>
            </div>
  </div>
  <Link />
            Schedule Your Demo
            <PlayIcon />
          </Link>
        </div>
      </section>
    </>
  );
};

export default DemoPage;


import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom;
import { CpuChipIcon, 
  CloudIcon,
  ShieldCheckIcon,
  CloudIcon,
  GlobeAltIcon,
  SignalIcon,
  BriefcaseIcon,
  ArrowRightIcon,
  CheckIcon'
} from '@heroicons/react/24/outline;

const SolutionsPage: React.FC = () => {
  const solutions = [
    {'
          title: 'AI-Powered Solutions','
          description: 'Transform your business with cutting-edge artificial intelligence and machine learning technologies.'
  },
      icon: CpuChipIcon,
      features: ['
        'Machine Learning Models','
        'Natural Language Processing','
        'Computer Vision','
        'Predictive Analytics','
        'Automated Decision Making','
        'Intelligent Automation'
      ],'
      href: '/ai-solutions'
    },
    {'
          title: 'Cybersecurity Solutions','
          description: 'Protect your digital assets with comprehensive security solutions and threat detection systems.'
  },
      icon: ShieldCheckIcon,
      features: ['
        'Threat Detection & Response','
        'Vulnerability Assessment','
        'Security Monitoring','
        'Compliance Management','
        'Incident Response','
        'Security Training'
      ],'
      href: '/cybersecurity'
    },
    {'
          title: 'Cloud Infrastructure','
          description: 'Build scalable, secure, and reliable cloud infrastructure for your business needs.'
  },
      icon: CloudIcon,
      features: ['
        'Cloud Migration','
        'Infrastructure as Code','
        'Auto-scaling','
        'Disaster Recovery','
        'Cost Optimization','
        'Multi-cloud Strategy'
      ],'
      href: '/cloud-infrastructure'
    },
    {'
          title: 'Micro SaaS Solutions','
          description: 'Custom micro SaaS applications tailored to your specific business requirements.'
  },
      icon: GlobeAltIcon,
      features: ['
        'Custom Development','
        'API Integration','
        'Scalable Architecture','
        'User Management','
        'Payment Processing','
        'Analytics & Reporting'
      ],'
      href: '/micro-saas-solutions'
    },
    {'
          title: '5G Technology','
          description: 'Leverage next-generation 5G technology for ultra-fast connectivity and IoT solutions.'
  },
      icon: SignalIcon,
      features: ['
        '5G Network Implementation','
        'IoT Device Management','
        'Edge Computing','
        'Real-time Data Processing','
        'Low Latency Applications','
        'Network Optimization'
      ],'
      href: '/5g-solutions'
    },
    {'
          title: 'IT Services','
          description: 'Complete IT infrastructure management and support services for your business.'
  },
      icon: BriefcaseIcon,
      features: ['
        'IT Infrastructure Management','
        'Help Desk Support','
        'System Administration','
        'Network Management','
        'Software Deployment','
        'Technical Consulting'
      ],'
      href: '/it-solutions'
    }
  ];

  return (
    
    <div>
      <Helmet />
        <title>Solutions - Zion Tech Group</title>
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
            <h1>Technology Solutions
            </h1></h1>
            <p />
              Comprehensive Solutions for Modern Businesses
            </p>
            <p />
              From AI and cybersecurity to cloud infrastructure and 5G technology, 
              we provide end-to-end solutions that drive digital transformation and business growth.
            </p>
            <Link />
              Get Started
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>
      {/* Solutions Grid */}
      <section>
        <div>
    <div />
            <h2 />
              Technology Solutions
            </h2>
            <p />
              Comprehensive technology solutions designed to meet your business needs
            </p>
          </div>
          
          <div />
            {solutions.map((solution, index) => (
              <div>
    <div />
                  <div>
    <solution />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{solution.title}</h3>"
                </div>
                
                <p />
                  {solution.description}
                </p>
                
                <ul />
                  {solution.features.map((feature, featureIndex) => (
                    <li />
                      <CheckIcon />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link />
                  Learn More
                  <ArrowRightIcon />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section>
        <div>
    <h2 />
            Ready to Transform Your Business?
          </h2>
          <p />'
            Let's discuss how our solutions can help you achieve your business goals
          </p>
          <div>
    <Link />
              Get Started Today
            </Link>
            <Link />
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default SolutionsPage;

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom;
import { ServerIcon,
  CloudIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  ArrowRightIcon,
  CheckIcon,
  PhoneIcon,
  EnvelopeIcon'
} from '@heroicons/react/24/outline;

const ITSolutionsPage: React.FC = () => {
  const services = [
    {'
          title: 'Infrastructure Management','
          description: 'Complete IT infrastructure setup, monitoring, and maintenance services.'
  },
      icon: ServerIcon,'
      features: ['24/7 Monitoring', 'Automated Backups', 'Performance Optimization', 'Security Updates']
    },
    {'
          title: 'Cloud Migration','
          description: 'Seamless migration to cloud platforms with zero downtime.'
  },
      icon: CloudIcon,'
      features: ['AWS/Azure/GCP', 'Data Migration', 'Cost Optimization', 'Security Compliance']
    },
    {'
          title: 'Cybersecurity Solutions','
          description: 'Comprehensive security measures to protect your digital assets.'
  },
      icon: ShieldCheckIcon,'
      features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Security Training']
    },
    {'
          title: 'AI Integration','
          description: 'Integrate artificial intelligence into your existing IT infrastructure.'
  },
      icon: CpuChipIcon,'
      features: ['Machine Learning', 'Process Automation', 'Data Analytics', 'Predictive Maintenance']
    }
  ];

  return (
    
    <div>
    <Helmet />
        <title>IT Solutions - Zion Tech Group</title>
        <meta />
        <meta />
      </Helmet>
      
      <div />
        {/* Hero Section */}
        <section>
        <div>
          <div>
            <h1>IT Solutions
              </h1></h1>
              <p />
                Comprehensive IT services designed to modernize your infrastructure, enhance security, and drive digital transformation.
              </p>
            </div>
          </div>
      </section>

        {/* Services Section */}
        <section>
        <div>
    <div />
              <h2 />
                Our IT Services
              </h2>
              <p />
                From infrastructure management to AI integration, we provide end-to-end IT solutions
              </p>
            </div>
            
            <div />
              {services.map((service, index) => (
                <div>
    <div />
                    <div>
    <service />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                  
                  <p />
                    {service.description}
                  </p>
                  
                  <ul />
                    {service.features.map((feature, featureIndex) => (
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
    <h2 className="text-4xl font-bold mb-6">Ready to Modernize Your IT Infrastructure?</h2>
            <p />
              Let our experts help you build a robust, secure, and scalable IT environment
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

      </div>
    </div>
  )};
};

export default ITSolutionsPage;
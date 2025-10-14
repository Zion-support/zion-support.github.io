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


const ITServicesPage: React.FC = () => {
  const services = [
    {
      icon: ServerIcon,'
          title: 'Infrastructure Management','
          description: 'Comprehensive IT infrastructure setup, maintenance, and optimization for maximum performance.'
  },
      features: ['
        'Server Configuration','
        'Network Setup','
        'Hardware Maintenance','
        'Performance Monitoring'
      ]
    },
    {
      icon: CloudIcon,'
          title: 'Cloud Solutions','
          description: 'Complete cloud migration and management services for scalable, secure, and cost-effective solutions.'
  },
      features: ['
        'Cloud Migration','
        'Multi-cloud Strategy','
        'Cost Optimization','
        'Security Compliance'
      ]
    },
    {
      icon: ShieldCheckIcon,'
          title: 'Cybersecurity Services','
          description: 'Advanced security solutions to protect your IT infrastructure from threats and vulnerabilities.'
  },
      features: ['
        'Threat Detection','
        'Vulnerability Assessment','
        'Security Monitoring','
        'Incident Response'
      ]
    },
    {
      icon: CpuChipIcon,'
          title: 'AI Integration','
          description: 'Integrate artificial intelligence into your existing IT infrastructure for enhanced capabilities.'
  },
      features: ['
        'Machine Learning','
        'Process Automation','
        'Data Analytics','
        'Predictive Maintenance'
      ]
    }
  ];

  const benefits = ['
    '24/7 Expert Support','
    'Proactive Monitoring','
    'Scalable Solutions','
    'Cost Optimization','
    'Security Compliance','
    'Performance Optimization'
  ];

  return (
    
    <div>
      <Helmet />
        <title>IT Services - Zion Tech Group</title>
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
            <h1>IT Services
            </h1></h1>
            <p />
              Comprehensive IT Solutions for Modern Businesses
            </p>
            <p />
              From infrastructure management to AI integration, we provide end-to-end IT services 
              that keep your business running smoothly and securely.
            </p>
            <Link />
              Get Started
              <ArrowRightIcon />
            </Link>
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
              Comprehensive IT solutions designed to meet your business needs
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

      {/* Benefits Section */}
      <section>
        <div>
    <div />
            <h2 />
              Why Choose Our IT Services?
            </h2>
            <p />
              We provide comprehensive IT solutions that keep your business running smoothly
            </p>
          </div>
          
          <div />
            {benefits.map((benefit, index) => (
              <div>
    <div />
                  <CheckIcon />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit}</h3>
                <p />
                  Professional IT services that ensure your systems are always running at peak performance.
                </p>
              </div>
              <div>
    <h3 />
                  Custom Implementation;
                </h3>
                <p />
                  Tailored IT implementations for your specific requirements.
                </p>
              </div>
              <div>
    <h3 />
                  24/7 Support;
                </h3>
                <p />
                  Round-the-clock support for all your IT needs.
                </p>
              </div>
  </div>
  <div>
    <button />
                Get Started Today;
              </button>
            </div>
          </div>;
const ITServicesPage: React.FC = () => {
  return (
    
    <>
      <Helmet />
    </>
        <title>ITServicesPage - Zion Tech Group</title>
        <meta name="description" content="ITServicesPage - Zion Tech Group" />
      </Helmet>
      <div>
    <div />
          <h1>ITServicesPage</h1>
          <p>This page is under construction.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div>
    <h2 />
            Ready to Optimize Your IT Infrastructure?
          </h2>
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
    </>
  );
export default ITServicesPage;
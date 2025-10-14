import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom;
import { ArrowPathIcon,
  UserGroupIcon,
  CloudIcon,
  CpuChipIcon,
  ArrowRightIcon,
  CheckIcon,
  ChartBarIcon'
} from '@heroicons/react/24/outline;


const DigitalTransformationPage: React.FC = () => {
  const services = [
    {
      icon: ArrowPathIcon,'
          title: 'Process Automation','
          description: 'Streamline and automate business processes to improve efficiency and reduce manual errors.'
  },
      features: ['
        'Workflow Analysis','
        'Process Mapping','
        'Automation Implementation','
        'Performance Monitoring'
      ]
    },
    {
      icon: UserGroupIcon,'
          title: 'Change Management','
          description: 'Guide your team through digital transformation with comprehensive change management strategies.'
  },
      features: ['
        'Training Programs','
        'Change Communication','
        'Adoption Strategies','
        'Performance Metrics'
      ]
    },
    {
      icon: CloudIcon,'
          title: 'Cloud Migration','
          description: 'Migrate your infrastructure to the cloud for improved scalability, security, and cost efficiency.'
  },
      features: ['
        'Cloud Strategy','
        'Data Migration','
        'Security Implementation','
        'Cost Optimization'
      ]
    },
    {
      icon: CpuChipIcon,'
          title: 'AI Integration','
          description: 'Integrate artificial intelligence into your business processes for enhanced decision-making and automation.'
  },
      features: ['
        'AI Strategy','
        'Model Development','
        'Integration Services','
        'Performance Monitoring'
      ]
    }
  ];

  const benefits = [
    {'
          title: 'Increased Efficiency','
          description: 'Streamline operations and reduce manual work'
  },
      icon: ChartBarIcon,'
      value: '40%'
    },
    {'
          title: 'Cost Reduction','
          description: 'Optimize processes and reduce operational costs'
  },
      icon: ChartBarIcon,'
      value: '30%'
    },
    {'
          title: 'Better Customer Experience','
          description: 'Improve customer satisfaction and engagement'
  },
      icon: ChartBarIcon,'
      value: '85%'
    },
    {'
          title: 'Data-Driven Decisions','
          description: 'Make informed decisions with real-time analytics'
  },
      icon: ChartBarIcon,'
      value: '90%'
    }
  ];

  return (
    
    <div>
      <Helmet />
        <title>Digital Transformation - Zion Tech Group</title>
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
            <h1>Digital Transformation
            </h1></h1>
            <p />
              Transform Your Business for the Digital Age
            </p>
            <p />
              Embrace digital transformation with our comprehensive services that modernize your business processes, '
              improve efficiency, and drive growth in today's competitive landscape.
            </p>
            <Link />
              Start Your Transformation
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
              Our Digital Transformation Services
            </h2>
            <p />
              Comprehensive solutions to modernize your business operations
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
              Transformation Benefits
            </h2>
            <p />
              See the measurable impact of digital transformation on your business
            </p>
          </div>
          
          <div />
            {benefits.map((benefit, index) => (
              <div>
    <div />
                  <benefit />
                </div>
                <div className="text-4xl font-bold text-purple-400 mb-2">{benefit.value}</div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section>
        <div>
    <div />
            <h2 />
              Our Transformation Process
            </h2>
            <p />
              A structured approach to ensure successful digital transformation
            </p>
          </div>
          
          <div />
            {['
              { step: '01',     title: 'Assessment',     description: 'Analyze current processes and identify transformation opportunities'
  } },'
              { step: '02',     title: 'Strategy',     description: 'Develop a comprehensive digital transformation roadmap'
  } },'
              { step: '03',     title: 'Implementation',     description: 'Execute the transformation plan with expert guidance'
  } },'
              { step: '04',     title: 'Optimization',     description: 'Monitor performance and continuously improve processes'
  } }
            ].map((phase, index) => (
              <div>
    <div />
                  <span className="text-2xl font-bold text-white">{phase.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
                <p className="text-gray-300">{phase.description}</p>
              </div>
  </div>
  <div>
    <button />
                Get Started Today;
              </button>
            </div>
          </div>;
const DigitalTransformationPage: React.FC = () => {
  return (
    
    <>
      <Helmet />
    </>
        <title>DigitalTransformationPage - Zion Tech Group</title>
        <meta name="description" content="DigitalTransformationPage - Zion Tech Group" />
      </Helmet>
      <div>
    <div />
          <h1>DigitalTransformationPage</h1>
          <p>This page is under construction.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div>
    <h2 />
            Ready to Transform Your Business?
          </h2>
          <p />'
            Let's discuss how digital transformation can drive your business forward
          </p>
          <div>
    <Link />
              Start Your Journey
            </Link>
            <Link />
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
export default DigitalTransformationPage;
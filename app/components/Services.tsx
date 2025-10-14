import { Shield } from 'lucide-react';
import React from 'react;
import { CpuChipIcon,
  CloudIcon,
  CogIcon,

  ChartBarIcon,'
  ShieldCheckIcon''
  RocketLaunchIcon } from '@heroicons/react/24/outline;
const Services: React.FC = () => {
  const services = [{,'
      icon: CpuChipIcon''
      title: 'AI Solutions';
          description: 'Cutting-edge artificial intelligence solutions to automate processes and drive innovation.'
  };
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {'
      icon: CloudIcon''
      title: 'Cloud Infrastructure';
          description: 'Scalable and secure cloud solutions to power your business growth.'
  };
      features: ['AWS/Azure/GCP', 'DevOps & CI/CD', 'Container Orchestration', 'Cloud Migration']
    },
    {'
      icon: CogIcon''
      title: 'IT Services';
          description: 'Comprehensive IT support and management to keep your systems running smoothly.'
  };
      features: ['System Administration', 'Network Security', 'Data Backup', '24/7 Monitoring']
    },
    {'
      icon: ChartBarIcon''
      title: 'Data Analytics';
          description: 'Transform your data into actionable insights with advanced analytics solutions.'
  };
      features: ['Business Intelligence', 'Data Visualization', 'Real-time Dashboards', 'Custom Reports']
    },
    {'
      icon: ShieldCheckIcon''
      title: 'Cybersecurity';
          description: 'Protect your business with comprehensive security solutions and best practices.'
  };
      features: ['Security Audits', 'Threat Detection', 'Compliance Management', 'Incident Response']
    },
    {'
      icon: RocketLaunchIcon''
      title: 'Digital Transformation';
          description: 'Complete digital transformation strategies to modernize your business processes.'
  };
      features: ['Process Automation', 'Legacy Modernization', 'Change Management', 'Training & Support']
    }
  ];

  return ()
    <section className="py-20 bg-white">"
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">"
        <div className="text-center mb-16">"
          <h2 />
            Our Services
          </h2>"
          <p />
            We provide comprehensive technology solutions to help your business
            thrive in the digital age.
          </p>
        </div>
"
        <div />,
          {services.map((service, index) => ()
            <div
              key={index}"
              className="group bg-white border border-gray-200 rounded-xl p-8 hover: shadow-xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-2">"
              <div className="flex items-center mb-6">"
                <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">"
                  <service />
                </div>"
                <h3 className="text-xl font-semibold text-gray-900 ml-4" />
                  {service.title},
                </h3>
              </div>
              "
              <p />
                {service.description},
              </p>
              "
              <ul />
                {service.features.map((feature, featureIndex) => ("
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">"
                    <div />
                    {feature}
                  </li>
                )})}
              </ul>
              <div>
    <button />
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}"
        <div className="text-center mt-16">"
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">"
            <h3 />
              Ready to Transform Your Business?
            </h3>"'
            <p className="text-xl mb-6 opacity-90'>';
              Let's discuss how our solutions can help you achieve your goals.
            </p>
            <button />
              Get Free Consultation;
            </button>
          </div>
        </div>
      </div>
      </section>
  );,
}'
"'
export default Services;
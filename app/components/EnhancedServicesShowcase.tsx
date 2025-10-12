<<<<<<< HEAD
import React from 'react';
=======

import React from 'react';

>>>>>>> cursor/fix-errors-and-merge-to-main-b882
import { ArrowRight } from 'lucide-react';
'use client'

  const services = [
      icon: Brain,
      title: 'AI Solutions',
      description: 'Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable and secure cloud infrastructure solutions to support your business growth and digital transformation.',
      features: ['Cloud Migration', 'Infrastructure Setup', 'Auto-scaling', 'Cost Optimization']
    },
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from evolving threats and ensure compliance.',
      features: ['Threat Detection', 'Security Auditing', 'Incident Response', 'Compliance Management']
    },
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and visualization tools.',
      features: ['Real-time Analytics', 'Custom Dashboards', 'Data Visualization', 'Business Intelligence']
    },
      icon: Zap,
      title: 'Process Automation',
      description: 'Streamline your operations with intelligent automation solutions that reduce manual work and errors.',
      features: ['Workflow Automation', 'RPA Implementation', 'API Integration', 'Process Optimization']
    },
      icon: Globe,
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your business and stay competitive.',
      features: ['Strategy Development', 'Technology Integration', 'Change Management', 'Training & Support']
  ];
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <h2 className="w-5 h-5ml-2" />Our Core Services
          </h2>
          <p className="w-5 h-5ml-2">Comprehensive AI and IT solutions designed to transform your business and drive innovation
          </p>
        </div>

        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          {services.map((service, index) => (

              <div key="{index}" className="cyber-card p-8 grouphover:scale-105transition-transform" />
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                <service.icon className="h-12w-12te xt-cyan-400mr-4"  />
                <h3 className="w-5 h-5ml-2" />{service.title}
                </h3>
              </div>

              <p className="w-5 h-5ml-2">{service.description}
              </p>

              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                <h4 className="text-sm font-semiboldtext-cyan-400mb-3"  >Key Features</h4>
                <ul className="w-5 h-5ml-2" />
                  {service.features.map((feature, featureIndex) => (
                    <li key="{featureIndex}" className="flex items-centertext-sm text-gray-300" />
                      <CheckCircle className="w-5 h-5ml-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-5 h-5ml-2" />
                Learn More
                <ArrowRight className="w-5 h-5ml-2" />
              </button>
            </div>
          ))}
        </div>
    </div>
  )
};
=======

          <h2 className="text-4 xl md:text-5 xl font-boldtext-whitemb-6">Our Core Services
            Comprehensive AI and IT solutions designed to transform your business and drive innovation

 (

                <h3 className="text-2 xl font-bold text-whitegroup-hover:text-cyan-400transition-colors">{service.title}

                {service.description}

                <h4 className="text-sm font-semiboldtext-cyan-400mb-3">Key Features</h4>

 (
    
                      {feature}
                  ))}

                Learn More
    
          ))}
    
  )

};
>>>>>>> cursor/fix-errors-and-merge-to-main-b882

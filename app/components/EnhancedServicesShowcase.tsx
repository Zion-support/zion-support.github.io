import React from 'react';
import {ArrowRight} from 'lucide-react';
'use client'

const Enhanced Services Showcase: React.FC = () => {
  constservices = [
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable and secure cloud infrastructure solutions to support your business growth and digital transformation.',
      features: ['Cloud Migration', 'Infrastructure Setup', 'Auto-scaling', 'Cost Optimization']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from evolving threats and ensure compliance.',
      features: ['Threat Detection', 'Security Auditing', 'Incident Response', 'Compliance Management']
    },
    {
      icon: Bar Chart,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and visualization tools.',
      features: ['Real-time Analytics', 'Custom Dashboards', 'Data Visualization', 'Business Intelligence']
    },
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Streamline your operations with intelligent automation solutions that reduce manual work and errors.',
      features: ['Workflow Automation', 'RPA Implementation', 'API Integration', 'Process Optimization']
    },
    {
      icon: Globe,
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your business and stay competitive.',
      features: ['Strategy Development', 'Technology Integration', 'Change Management', 'Training & Support']
    }
  ];
  return (
    <div className ="py-20 px-4sm:px-6lg:px-8" />
      <div className ="max-w-7xlmx-auto" />
        <div className ="text-centermb-16" />
          <h2className ="text-4 xlmd:text-5 xlfont-boldtext-whitemb-6"  />OurCore Services
          </h2>
          <pclassName ="text-xltext-cyan-400 max-w-3xlmx-auto" />
            ComprehensiveAI andIT solutionsdesigned totransform yourbusiness anddrive innovation
          </p>
        </div>

        <div className ="gridgrid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8" />
          {services.map((service, index) => (

              <divkey ="{index}" className="cyber-cardp-8 grouphover:scale-105transition-transform" />
              <div className ="flexitems-centermb-6" />
                <service.iconclassName ="h-12 w-12text-cyan-400mr-4" / />
                <h3className ="text-2 xlfont-boldtext-whitegroup-hover:text-cyan-400transition-colors"  />{service.title}
                </h3>
              </div>

              <pclassName ="text-gray-300mb-6leading-relaxed" />
                {service.description}
              </p>

              <div className ="mb-6" />
                <h4className ="text-smfont-semiboldtext-cyan-400mb-3"  >KeyFeatures</h4>
                <ulclassName ="space-y-2" />
                  {service.features.map((feature, featureIndex) => (
                    <likey ="{featureIndex}" className="flexitems-centertext-smtext-gray-300" />
                      <Check Circleclass Name="h-4 w-4 text-green-400mr-2flex-shrink-0" / />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <buttonclassName ="cyber-button w-full py-3 text-center inline-flex items-center justify-centergroup-hover:scale-105transition-transform" />
                Learn More
                <Arrow Rightclass Name="ml-2h-4w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};
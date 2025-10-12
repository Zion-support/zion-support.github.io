import React from 'react';
import { ArrowRight } from 'lucide-react';
'use client';

const EnhancedServicesShowca s e: React.FC = () => {
  constservices= [
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Harness the power of artificial intelligen c e to automate processes, gain insights, and drive innovation.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable and secure cloud infrastructu r e solutions to support your business growth and digital transformati o n.',
      features: ['Cloud Migration', 'Infrastructu r e Setup', 'Auto-scaling', 'Cost Optimizati o n']
    },
    {
      icon: Shield,
      title: 'Cybersecuri t y',
      description: 'Comprehensi v e security solutions to protect your business from evolving threats and ensure compliance.',
      features: ['Threat Detection', 'Security Auditing', 'Incident Response', 'Compliance Management']
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and visualizati o n tools.',
      features: ['Real-timeAnalytics', 'Custom Dashboards', 'Data Visualizati o n', 'Business Intelligen c e']
    },
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Streamline your operations with intellige n t automation solutions that reduce manual work and errors.',
      features: ['Workflow Automation', 'RPA Implementati o n', 'API Integrati o n', 'Process Optimizati o n']
    },
    {
      icon: Globe,
      title: 'Digital Transformati o n',
      description: 'Complete digital transformati o n services to modernize your business and stay competiti v e.',
      features: ['Strategy Developme n t', 'Technology Integrati o n', 'Change Management', 'Training & Support']
    }
  ];
return (
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <h2 className="w-5h-5ml-2" />Our Core Services;
          </h2>
          <p className="w-5h-5ml-2">Comprehensi v e AI and IT solutions designed to transform your business and drive innovation;
          </p>
        </div>

        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          {services.map((service, index) => ())

              <divkey="{index}" className="cyber-cardp-8grouphover:scale-105transition-transform" />
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <service.iconclassName="h-12w-12text-cyan-400mr-4"  />
                <h3 className="w-5h-5ml-2" />{service.title}
                </h3>
              </div>

              <p className="w-5h-5ml-2">{service.description}
              </p>

              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <h4 className="text-smfont-semiboldtext-cyan-400mb-3"  >Key Features</h4>
                <ulclassName="w-5h-5ml-2" />
                  {service.features.map((feature, featureInd e x) => ())
                    <likey="{featureInd e x}" className="flexitems-centertext-smtext-gray-300" />
                      <CheckCirc leclassName="w-5h-5ml-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-5h-5ml-2" />
                Learn More;
                <ArrowRight className="w-5h-5ml-2" />
              </button>
            </div>
          ))}
        </div>
    </div>
  )
};
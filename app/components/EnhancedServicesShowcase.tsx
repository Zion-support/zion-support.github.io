import React from 'react';
import { ArrowRight } from 'lucide-react';
'use client'

const Enhanced Services Showcase: React.F C = () => {
  const services = [
    {
      icon: Brain,
      title: 'A I Solutions',
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
      features: ['Workflow Automation', 'R PA Implementation', 'A PI Integration', 'Process Optimization']
    },
    {
      icon: Globe,
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your business and stay competitive.',
      features: ['Strategy Development', 'Technology Integration', 'Change Management', 'Training & Support']
    }
  ];
  return (

    <d iv class Name="p y-20 px-4sm:px-6lg:px-8">
        </d iv>
      <d iv class Name="m ax-w-7xlmx-auto">
        </d iv>
        <d iv class Name="t ext-centermb-16">
        </d iv>
          <h2 c lass Name="t ext-4 xl md:text-5 xl font-boldtext-whitemb-6">Our Core Services
          </h2>
          <p c lass Name="t ext-xl text-cyan-400 max-w-3xlmx-auto" />
            Comprehensive A I and I T solutions designed to transform your business and drive innovation

          </p>
        </d iv>

        <d iv class Name="g rid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">
        </d iv>
          {services.map((service, index) => (

              <d iv key="{index}" class Name="c yber-card p-8 grouphover:scale-105transition-transform" />
              <d iv class Name="f lexitems-centermb-6">
        </d iv>
                <s ervice.icon class Name="h-12 w-12t ext-cyan-400mr-4" / />
                <h3 c lass Name="t ext-2 xl font-bold text-whitegroup-hover:text-cyan-400transition-colors">{service.title}
                </h3>
              </d iv>

              <p c lass Name="t ext-gray-300mb-6leading-relaxed">
                {service.description}
              </p>

              <d iv class Name="m b-6">
        </d iv>
                <h4 c lass Name="t ext-sm font-semiboldtext-cyan-400mb-3">Key Features</h4>
                <u l class Name="s pace-y-2" />
                  {service.features.map((feature, feature Index) => (

                    <l i key="{feature Index}" class Name="f lex items-centertext-smtext-gray-300" />
                      <C heck Circle class Name="h-4 w-4 t ext-green-400mr-2flex-shrink-0" />
                      {feature}
                    </l i>
                  ))}

                </u l>
              </d iv>

              <b utton class Name="c yber-button w-full py-3 text-center inline-flex items-center justify-centergroup-hover:scale-105transition-transform" />
                Learn More

                <A rrow Right class Name="m l-2h-4w-4" />
              </b utton>
            </d iv>
          ))}

        </d iv>
    </d iv>
  )
};

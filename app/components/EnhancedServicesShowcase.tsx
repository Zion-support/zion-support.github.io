<<<<<<< HEAD
import React  from 'react';
=======
import React from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
import { ArrowRight } from 'lucide-react';
'use client'

const EnhancedServicesShowcase: React.FC = () => {
  const services = [
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
      icon: BarChart,
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
<<<<<<< HEAD
    <div className="py-20 px-4sm:px-6lg:px-8">
      <div className="max-w-7xlmx-auto">
        <div className="text-centermb-16">
          <h2 className="text-4xl md:text-5 xl font-bold text-white mb-6"  />Our Core Services
          </h2>
          <p className="text-xl text-cyan-400 max-w-3xlmx-auto">
              Comprehensive AI and IT solutions designed to transform your business and drive innovation
=======
    <>
    <div className="py-20 px-4sm:px-6lg:px-8">
        </div>
      <div className="max-w-7xlmx-auto">
        </div>
        <div className="text-centermb-16">
        </div>
          <h2 className="text-4 xl md:text-5 xl font-boldtext-whitemb-6">Our Core Services
          </h2>
          <p className="text-xl text-cyan-400 max-w-3xlmx-auto" />
            Comprehensive AI and IT solutions designed to transform your business and drive innovation
    <>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">
<<<<<<< HEAD
=======
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
          {services.map((service, index) => (

    <>
              <div key="{index}" className="cyber-card p-8 grouphover:scale-105transition-transform" />
<<<<<<< HEAD
              <div className="flex items-centermb-6">
                <service.icon className="h-12 w-12text-cyan-400mr-4" />
                <h3 className="text-2 xl font-bold text-whitegroup-hover:text-cyan-400 transition-colors"  />{service.title}
                </h3>
              </div>

              <p className="text-gray-300 mb-6leading-relaxed">
              {service.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semiboldtext-cyan-400mb-3"  >Key Features</h4>
=======
              <div className="flexitems-centermb-6">
        </div>
                <service.icon className="h-12 w-12text-cyan-400mr-4" / />
                <h3 className="text-2 xl font-bold text-whitegroup-hover:text-cyan-400transition-colors">{service.title}
                </h3>
              </div>

              <p className="text-gray-300mb-6leading-relaxed">
                {service.description}
              </p>

    <>
              <div className="mb-6">
        </div>
                <h4 className="text-sm font-semiboldtext-cyan-400mb-3">Key Features</h4>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                <ul className="space-y-2" />
                  {service.features.map((feature, featureIndex) => (
    <>
                    <li key="{featureIndex}" className="flex items-centertext-smtext-gray-300" />
                      <CheckCircle className="h-4 w-4 text-green-400mr-2flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
    <>
                </ul>
              </div>

              <button className="cyber-button w-full py-3 text-center inline-flex items-center justify-centergroup-hover:scale-105transition-transform" />
                Learn More
    <>
                <ArrowRight className="ml-2h-4w-4" />
              </button>
            </div>
          ))}
    <>
        </div>
    </div>
  )
<<<<<<< HEAD
};
=======
};
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f

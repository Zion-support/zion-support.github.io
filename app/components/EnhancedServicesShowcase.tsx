import React from 'react';
import { ArrowRight } from 'lucide-react';
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
    <div><div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div><div></div></div></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
          <h2 className="w-5h-5ml-2" />Our Core Services;
          </h2>
          <p className="w-5h-5ml-2">Comprehensive AI and IT solutions designed to transform your business and drive innovation;
          <div><div></p>
        </div></div></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
          {services.map((service, index) => (
              <div><div><div key={index} className="cyber-card p-8 grouphover:scale-105transition-transform"></div></div></div>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div><div></div></div></div>
                <service.icon className="h-12w-12tex t-cyan-400mr-4"><div></service></div></div></div>
                <h3 className="w-5h-5ml-2" />{service.title}
                <div><div></h3>
              </div></div></div>
              <p className="w-5h-5ml-2"></div>{service.description}
              <div></p>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
                <h4 className="text-sm font-semiboldtext-cyan-400mb-3"  >Key Features<div></h4>
                <ul className="w-5h-5ml-2"><div></ul></div></div></div>
                  {service.features.map((feature, featureIndex) => (
                    <div><div><li key={featureIndex} className="flex items-centertext-sm text-gray-300"></li></div></div>
                      <CheckCircle className="w-5h-5ml-2"><div></div></CheckCircle></div></div>
                      {feature}
                    </li>
                  ))}
                <div><div></ul>
              </div></div></div>
              <button className="w-5h-5ml-2"><div></div></button></div></div>
                Learn More;
                <div><div><ArrowRight className="w-5h-5ml-2"></ArrowRight></div></div>
              </button><div></div>
            </div></div></div>
          ))}
        </div>
    </div>
  )
};
};
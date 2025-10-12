import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <h2 className="w-5h-5ml-2" />Our Core Services;
          </h2>
          <p className="w-5h-5ml-2">Comprehensive AI and IT solutions designed to transform your business and drive innovation;
          </p>
        </div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          {services.map((service, index) => (

              <div key={index} className="cyber-card p-8 grouphover:scale-105transition-transform" /></div>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                <service.icon className="h-12w-12tex t-cyan-400mr-4"  /></service>
                <h3 className="w-5h-5ml-2" />{service.title}
                </h3>
              </div>
              <p className="w-5h-5ml-2">{service.description}
              </p>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                <h4 className="text-sm font-semiboldtext-cyan-400mb-3"  >Key Features</h4>
                <ul className="w-5h-5ml-2" /></ul>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-centertext-sm text-gray-300" /></li>
                      <CheckCircle className="w-5h-5ml-2" /></CheckCircle>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="w-5h-5ml-2" /></button>
                Learn More;
                <ArrowRight className="w-5h-5ml-2" /></ArrowRight>
              </button>
            </div>
          ))}
        </div>
    </div>
  )
export default function EnhancedServicesShowcase() {
  return (
    <><Helmet>
        <title>Enhanced Services Showcase - Zion Tech Group</title>
        <meta name="description" content="Professional enhanced services showcase by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Enhanced Services Showcase</h1>
          <p className="text-lg text-gray-300 mb-8">Professional enhanced services showcase coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div></>
  );
}
};

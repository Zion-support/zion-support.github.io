import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  CpuChipIcon, 
  CloudIcon, 
  ShieldCheckIcon, 
  ChartBarIcon,
  ArrowRightIcon,
  CheckIcon
} from '@heroicons/react/24/outline';

const ServicesPage = () => {
  const serviceCategories = [
    {
      title: 'AI Services',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      icon: CpuChipIcon,
      services: [
        { 
          name: 'AI Content Generation', 
          price: '$299/month', 
          description: 'Create high-quality content at scale with AI', 
          features: ['Blog Posts', 'Social Media', 'Product Descriptions', 'Email Campaigns'] 
        },
        { 
          name: 'AI Analytics', 
          price: '$499/month', 
          description: 'Transform data into actionable insights', 
          features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom Reports', 'Data Visualization'] 
        },
        { 
          name: 'AI Automation', 
          price: '$399/month', 
          description: 'Automate repetitive tasks and workflows', 
          features: ['Process Automation', 'Workflow Optimization', 'Task Scheduling', 'Integration'] 
        }
      ]
    },
    {
      title: 'Cybersecurity',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      icon: ShieldCheckIcon,
      services: [
        { 
          name: 'Security Assessment', 
          price: '$1,200/month', 
          description: 'Comprehensive security evaluation and vulnerability assessment', 
          features: ['Penetration Testing', 'Security Audit', 'Risk Assessment', 'Compliance Check'] 
        },
        { 
          name: 'Managed Security Services', 
          price: '$2,000/month', 
          description: '24/7 security monitoring and incident response', 
          features: ['24/7 Monitoring', 'Incident Response', 'Threat Detection', 'Security Updates'] 
        }
      ]
    },
    {
      title: 'Cloud Infrastructure',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      icon: CloudIcon,
      services: [
        { 
          name: 'Cloud Migration', 
          price: '$1,500/month', 
          description: 'Seamlessly migrate to the cloud', 
          features: ['AWS Migration', 'Azure Migration', 'Google Cloud', 'Data Migration'] 
        },
        { 
          name: 'Cloud Management', 
          price: '$800/month', 
          description: 'Ongoing cloud infrastructure management', 
          features: ['Monitoring', 'Optimization', 'Cost Management', 'Security'] 
        }
      ]
    },
    {
      title: 'Data Analytics',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      icon: ChartBarIcon,
      services: [
        { 
          name: 'Business Intelligence', 
          price: '$1,000/month', 
          description: 'Transform data into business insights', 
          features: ['Data Warehousing', 'ETL Processes', 'Reporting', 'Dashboards'] 
        },
        { 
          name: 'Data Science', 
          price: '$1,500/month', 
          description: 'Advanced analytics and machine learning', 
          features: ['Predictive Modeling', 'Statistical Analysis', 'ML Algorithms', 'Data Mining'] 
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive AI and IT services including cybersecurity, cloud infrastructure, data analytics, and automation solutions." />
        <meta name="keywords" content="AI services, IT services, cybersecurity, cloud infrastructure, data analytics, automation" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive AI and IT solutions designed to transform your business and drive growth.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Get Started Today
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8">
                <div className="flex items-center mb-8">
                  <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h2 className="text-3xl font-bold text-white">{category.title}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-slate-700/50 rounded-lg p-6 hover:bg-slate-700/70 transition-all duration-300">
                      <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                      <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                      <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                      
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <CheckIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <Link
                        to="/contact"
                        className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center block"
                      >
                        Learn More
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our experts help you choose the right services for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
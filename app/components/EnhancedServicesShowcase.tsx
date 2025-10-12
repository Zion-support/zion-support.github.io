import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Cloud, Shield, BarChart, Zap, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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

export default function EnhancedServicesShowcase() {
  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT solutions designed to transform your business and drive innovation." />
      </Helmet>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business and drive innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-medium"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
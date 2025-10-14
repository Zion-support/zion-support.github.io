import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
export default function ServicesPage() {
  const services = [
    {
      title: 'AI Solutions',
      description: 'Advanced artificial intelligence solutions for automation, machine learning, and intelligent decision making.',
      icon: CpuChipIcon,
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      color: 'blue'
    },
    {
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services to modernize your IT environment.',
      icon: CloudIcon,
      features: ['Cloud Migration', 'Infrastructure as Code', 'Multi-cloud Strategy', 'DevOps Automation'],
      color: 'green'
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your data and infrastructure from threats.',
      icon: ShieldCheckIcon,
      features: ['Security Assessment', 'Threat Detection', 'Compliance Management', 'Incident Response'],
      color: 'red'
    },
    {
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with our advanced analytics solutions.',
      icon: ChartBarIcon,
      features: ['Business Intelligence', 'Data Visualization', 'Real-time Analytics', 'Data Warehousing'],
      color: 'purple'
    },
    {
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your business processes.',
      icon: RocketLaunchIcon,
      features: ['Process Automation', 'Digital Strategy', 'Change Management', 'Technology Integration'],
      color: 'orange'
    },
    {title: 'Global Solutions',
      description: 'Worldwide IT solutions and support services for international businesses.',
      icon: GlobeAltIcon,
      features: ['Global Support', 'Multi-region Deployment', 'Compliance Management', 'Local Expertise'],
      color: 'indigo'}
  ];
  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      red: 'bg-red-100 text-red-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600',
      indigo: 'bg-indigo-100 text-indigo-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };
  return (
    <div className="min-h-screen bg-white">"
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT solutions by Zion Tech Group." />"
      </Helmet>
      <div className="container mx-auto px-4 py-16">"
        {/* Header */}
        <div className="text-center mb-16">"
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Services</h1>"
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">"
            Comprehensive AI and IT solutions designed to transform your business
            and drive innovation in the digital age.
          </p>
        </div>
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">"
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">"
                <div className={`rounded-full p-3 w-12 h-12 mb-4 flex items-center justify-center ${getColorClasses(service.color)}`}>`
                  <Icon className="w-6 h-6" />"
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>"
                <p className="text-gray-600 mb-4">{service.description}</p>"
                <ul className="text-sm text-gray-500 space-y-1">"
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">"
                      <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2" />"
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">"
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>"
          <p className="text-xl mb-8">
            Let's discuss how our services can help transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">"
            <Link>
              to="/contact""
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors""
            >
              Contact Us
            </Link>
            <Link>
              to="/about""
              className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors""
            >
              Learn More
            </Link>
          </div>
        </div>
      </div></div>);
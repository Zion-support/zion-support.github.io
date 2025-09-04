import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock, Phone, Mail, MapPin, BarChart3, Shield, Cloud, Settings, Network } from 'lucide-react';
// import { Button } from '../components/ui/button';

export default function ITServices() {
  const title = 'IT Services — Zion Tech Group';
  const description = 'Comprehensive IT services including cloud migration, DevOps, cybersecurity, infrastructure management, and 24/7 support.';

  const itServices = [
    {
      title: 'AI-Powered IT Operations',
      description: 'Intelligent IT operations with AI-driven automation and optimization',
      icon: BarChart3,
      features: [
        'AI-powered incident detection and resolution',
        'Predictive maintenance and capacity planning',
        'Automated root cause analysis',
        'Intelligent ticket routing and prioritization',
        'Performance optimization recommendations',
        'Self-healing infrastructure capabilities'
      ],
      pricing: '$6,000 - $35,000/month',
      delivery: '8-16 weeks',
      category: 'AI Operations'
    },
    {
      title: 'Zero-Trust Security Architecture',
      description: 'Comprehensive zero-trust security implementation and management',
      icon: Shield,
      features: [
        'Identity and access management',
        'Network segmentation and micro-segmentation',
        'Continuous security monitoring',
        'Threat detection and response',
        'Compliance automation',
        'Security policy enforcement'
      ],
      pricing: '$8,000 - $45,000/month',
      delivery: '12-20 weeks',
      category: 'Cybersecurity'
    },
    {
      title: 'Cloud Migration & Optimization',
      description: 'Seamless cloud migration with cost optimization and performance tuning',
      icon: Cloud,
      features: [
        'Multi-cloud strategy and planning',
        'Automated migration tools',
        'Cost optimization and monitoring',
        'Performance tuning and scaling',
        'Disaster recovery setup',
        'Security and compliance'
      ],
      pricing: '$5,000 - $30,000/month',
      delivery: '6-12 weeks',
      category: 'Cloud Services'
    },
    {
      title: 'DevOps & CI/CD Automation',
      description: 'Complete DevOps transformation with automated CI/CD pipelines',
      icon: Settings,
      features: [
        'CI/CD pipeline setup and optimization',
        'Infrastructure as Code (IaC)',
        'Container orchestration',
        'Automated testing and deployment',
        'Monitoring and alerting',
        'Performance optimization'
      ],
      pricing: '$4,000 - $25,000/month',
      delivery: '4-10 weeks',
      category: 'DevOps'
    },
    {
      title: 'Network Infrastructure Management',
      description: 'Advanced network infrastructure design, implementation, and management',
      icon: Network,
      features: [
        'Network design and architecture',
        'SD-WAN implementation',
        'Network security and monitoring',
        'Performance optimization',
        'Disaster recovery planning',
        '24/7 network monitoring'
      ],
      pricing: '$3,000 - $20,000/month',
      delivery: '6-14 weeks',
      category: 'Infrastructure'
    },
    {
      title: 'Data Analytics & Business Intelligence',
      description: 'Advanced data analytics and business intelligence solutions',
      icon: BarChart3,
      features: [
        'Data warehouse design and implementation',
        'Real-time analytics dashboards',
        'Machine learning integration',
        'Predictive analytics',
        'Data visualization',
        'Custom reporting solutions'
      ],
      pricing: '$5,000 - $28,000/month',
      delivery: '8-16 weeks',
      category: 'Data Analytics'
    }
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Header Section */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                IT Services & Solutions
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Comprehensive IT services including cloud migration, DevOps, cybersecurity, 
                infrastructure management, and 24/7 support to transform your business.
              </p>
              
              {/* Contact Information */}
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="h-5 w-5" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail className="h-5 w-5" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-5 w-5" />
                  <span>364 E Main St STE 1008 Middletown DE 19709</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg inline-flex items-center">
                    Get Free Consultation
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </button>
                </Link>
                <Link href="/ultimate-services-2025">
                  <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-6 rounded-lg">
                    View All Services
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg mr-4">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                    <p className="text-sm text-blue-600 font-medium">{service.category}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  <h4 className="font-medium text-gray-900">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-bold text-green-600">{service.pricing}</span>
                    <span className="text-sm text-gray-500">Monthly</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>Delivery: {service.delivery}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your IT Infrastructure?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact us today for a free consultation and customized IT solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg inline-flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Call +1 302 464 0950
                </button>
              </Link>
              <Link href="/contact">
                <button className="border border-white text-white hover:bg-white hover:text-blue-600 font-medium py-3 px-6 rounded-lg inline-flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  Email Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
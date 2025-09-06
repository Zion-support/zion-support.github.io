import React from 'react';
import {
  LightBulbIcon,
  CpuChipIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  UserGroupIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

export const metadata = {
  title: "Services | Zion Tech Group",
  description: "Comprehensive AI, micro SaaS, and IT services to help your business scale and succeed.",
};

const services = [
  {
    name: 'AI Solutions',
    description: 'Custom AI models, automation, and intelligent systems that transform your business operations. From machine learning to natural language processing, we build AI that delivers real value.',
    icon: LightBulbIcon,
    color: 'blue',
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'AI Automation', 'Data Science'],
    link: '/services/ai-solutions',
  },
  {
    name: 'Micro SaaS Development',
    description: 'Scalable, secure micro SaaS products that solve specific business challenges. We handle everything from concept to deployment, ensuring a robust and user-friendly application.',
    icon: CpuChipIcon,
    color: 'purple',
    features: ['Custom Web Applications', 'API Development', 'Database Design', 'User Management', 'Payment Integrations', 'Cloud Deployment'],
    link: '/services/micro-saas',
  },
  {
    name: 'Enterprise IT Services',
    description: 'Cloud migration, DevOps, SRE, and infrastructure management for enterprise scale. Our experts ensure your IT infrastructure is robust, secure, and optimized for performance.',
    icon: GlobeAltIcon,
    color: 'green',
    features: ['Cloud Migration (AWS, Azure, GCP)', 'DevOps & SRE', 'Infrastructure as Code', 'Security Consulting', 'Network Management', '24/7 Support'],
    link: '/services/it-services',
  },
  {
    name: 'Cybersecurity Solutions',
    description: 'Advanced cybersecurity and data protection for enterprise-grade applications. Protect your assets with our comprehensive security strategies and incident response plans.',
    icon: ShieldCheckIcon,
    color: 'red',
    features: ['Threat Detection & Prevention', 'Compliance Management', 'Security Auditing', 'Incident Response', 'Vulnerability Assessments', 'Data Encryption'],
    link: '/services/cybersecurity',
  },
  {
    name: 'Data Analytics & BI',
    description: 'Real-time data analysis and predictive modeling for informed decision making. Turn raw data into actionable insights with our powerful analytics solutions.',
    icon: ChartBarIcon,
    color: 'indigo',
    features: ['Business Intelligence Dashboards', 'Predictive Analytics', 'Data Warehousing', 'ETL Pipelines', 'Custom Reporting', 'Data Visualization'],
    link: '/services/data-analytics',
  },
  {
    name: 'Team Augmentation',
    description: 'Seamless integration of expert talent to augment your existing teams. Get access to top-tier developers, engineers, and project managers on demand.',
    icon: UserGroupIcon,
    color: 'orange',
    features: ['Staff Augmentation', 'Dedicated Teams', 'Project Management', 'Technical Consulting', 'Skill Gap Analysis', 'Flexible Engagement Models'],
    link: '/services/team-augmentation',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Our Comprehensive{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Services
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            We offer a full spectrum of technology solutions, from cutting-edge AI to robust IT infrastructure,
            designed to empower your business and drive innovation.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center"
          >
            Get a Free Consultation
            <ArrowRightIcon className="inline-block h-5 w-5 ml-2" />
          </Link>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className={`inline-flex p-4 rounded-xl bg-${service.color}-100 mb-6`}>
                  <service.icon className={`h-9 w-9 text-${service.color}-600`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6 text-gray-700">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.link}
                  className={`inline-flex items-center text-${service.color}-600 font-semibold hover:text-${service.color}-700 transition-colors`}
                >
                  Explore {service.name}
                  <ArrowRightIcon className="h-4 w-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Our team of experts is ready to help you build innovative solutions that drive real business value.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center"
          >
            Contact Us Today
            <ArrowRightIcon className="inline-block h-5 w-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
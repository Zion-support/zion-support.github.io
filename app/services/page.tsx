import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  ArrowRightIcon,
  CheckIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const ServicesPage: React.FC = () => {
  const serviceCategories = [
    {
      title: 'AI & Machine Learning',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      icon: CpuChipIcon,
      services: [
        'AI Strategy & Consulting',
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Automation'
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      icon: CloudIcon,
      services: [
        'Cloud Migration',
        'Infrastructure Setup',
        'DevOps & CI/CD',
        'Container Orchestration',
        'Serverless Architecture',
        'Cloud Security'
      ]
    },
    {
      title: 'Data & Analytics',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      icon: ChartBarIcon,
      services: [
        'Data Engineering',
        'Business Intelligence',
        'Real-time Analytics',
        'Data Visualization',
        'Data Warehousing',
        'ETL/ELT Pipelines'
      ]
    },
    {
      title: 'Security & Compliance',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      icon: ShieldCheckIcon,
      services: [
        'Security Audits',
        'Compliance Management',
        'Identity & Access Management',
        'Threat Detection',
        'Data Protection',
        'Security Training'
      ]
    },
    {
      title: 'Web & Mobile Development',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      icon: GlobeAltIcon,
      services: [
        'React/Next.js Applications',
        'Mobile App Development',
        'Progressive Web Apps',
        'API Development',
        'Microservices',
        'Performance Optimization'
      ]
    }
  ];

  const features = [
    {
      title: 'Expert Team',
      description: 'Our team consists of certified professionals with years of experience in cutting-edge technologies.',
      icon: StarIcon
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support to ensure your systems run smoothly and efficiently.',
      icon: CheckIcon
    },
    {
      title: 'Scalable Solutions',
      description: 'We build solutions that grow with your business and adapt to changing needs.',
      icon: ArrowRightIcon
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - AI & IT Solutions | Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services including machine learning, cloud infrastructure, data analytics, security, and web development solutions." />
        <meta name="keywords" content="AI services, IT solutions, machine learning, cloud computing, data analytics, web development, mobile apps" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 flex items-center"
              >
                Get Started
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Service Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive range of AI and IT services tailored to your business needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <div className={`w-12 h-12 ${category.bgColor} ${category.borderColor} border rounded-lg flex items-center justify-center mr-4`}>
                        <IconComponent className={`w-6 h-6 ${category.color}`} />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {category.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-center text-gray-300">
                          <CheckIcon className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                          {service}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className={`mt-6 inline-flex items-center ${category.color} hover:underline font-medium`}
                    >
                      Learn More
                      <ArrowRightIcon className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Our Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver exceptional results through our expertise, dedication, and innovative approach.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your project and find the perfect solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 flex items-center"
              >
                Start Your Project
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;
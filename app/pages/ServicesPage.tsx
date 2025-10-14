import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  CloudIcon,
  ShieldCheckIcon,
  CogIcon,
  RocketLaunchIcon,
  SignalIcon,
  GlobeAltIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const ServicesPage: React.FC = () => {
  const mainServices = [
    {
      icon: CpuChipIcon,
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions to transform your business operations.',
      href: '/ai-solutions',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: CloudIcon,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud infrastructure solutions for modern businesses.',
      href: '/cloud-infrastructure',
      features: ['Cloud Migration', 'Infrastructure as Code', 'Auto-scaling', 'Disaster Recovery'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Cybersecurity',
      description: 'Comprehensive cybersecurity solutions to protect your digital assets.',
      href: '/cybersecurity',
      features: ['Security Audits', 'Threat Detection', 'Compliance', 'Incident Response'],
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: CogIcon,
      title: 'IT Services',
      description: 'Complete IT services to keep your technology running smoothly.',
      href: '/it-services',
      features: ['IT Support', 'Network Management', 'System Administration', 'Help Desk'],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: RocketLaunchIcon,
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your business.',
      href: '/digital-transformation',
      features: ['Process Automation', 'Digital Strategy', 'Change Management', 'Technology Integration'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: GlobeAltIcon,
      title: 'Micro SaaS Solutions',
      description: 'Custom micro SaaS applications tailored to your specific business needs.',
      href: '/micro-saas-solutions',
      features: ['Custom Development', 'API Integration', 'Scalable Architecture', 'Multi-tenant Design'],
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const additionalServices = [
    {
      title: '5G Solutions',
      description: 'Next-generation 5G network solutions for ultra-fast connectivity.',
      href: '/5g-solutions',
      icon: SignalIcon
    },
    {
      title: 'Blockchain Solutions',
      description: 'Secure and transparent blockchain-based solutions.',
      href: '/blockchain',
      icon: ShieldCheckIcon
    },
    {
      title: 'IoT Solutions',
      description: 'Internet of Things solutions for smart devices and systems.',
      href: '/iot-edge',
      icon: CpuChipIcon
    },
    {
      title: 'Data Analytics',
      description: 'Advanced data analytics and business intelligence solutions.',
      href: '/business-intelligence',
      icon: CogIcon
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your current systems and identify opportunities for improvement.'
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'We develop a comprehensive strategy tailored to your business goals.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Our expert team implements the solution with minimal disruption to your operations.'
    },
    {
      step: '04',
      title: 'Support & Maintenance',
      description: 'We provide ongoing support and maintenance to ensure optimal performance.'
    }
  ];

  const whyChooseUs = [
    {
      icon: StarIcon,
      title: 'Expert Team',
      description: 'Our team consists of certified professionals with years of experience.'
    },
    {
      icon: CheckCircleIcon,
      title: 'Proven Track Record',
      description: 'We have successfully completed 50+ projects with a 99% success rate.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Security First',
      description: 'Security is at the core of everything we do, ensuring your data is protected.'
    },
    {
      icon: RocketLaunchIcon,
      title: 'Innovation',
      description: 'We stay ahead of the curve with the latest technologies and best practices.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services by Zion Tech Group. AI solutions, cloud infrastructure, cybersecurity, and digital transformation." />
        <meta name="keywords" content="AI services, IT services, cloud infrastructure, cybersecurity, digital transformation, micro SaaS, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business and drive growth.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From artificial intelligence and cloud infrastructure to cybersecurity and digital transformation, 
              we provide end-to-end technology solutions that help businesses thrive in the digital age.
            </p>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Core Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainServices.map((service, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Additional Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.href}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow text-center"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Zion Tech Group?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <reason.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss how our services can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
              <Link 
                to="/pricing" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;
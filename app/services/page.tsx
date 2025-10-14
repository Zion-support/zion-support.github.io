import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group services page." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Services</h1>
          <p className="text-xl text-gray-600">
            Welcome to our services page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
=======
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

export default function ServicesPage() {
  const services = [
    {
      icon: CpuChipIcon,
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions to transform your business operations.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      href: '/ai-solutions'
    },
    {
      icon: CloudIcon,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      features: ['Cloud Migration', 'Infrastructure Setup', 'DevOps Automation', 'Cost Optimization'],
      href: '/cloud-services'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      features: ['Security Audits', 'Threat Detection', 'Compliance Management', 'Incident Response'],
      href: '/cybersecurity'
    },
    {
      icon: ChartBarIcon,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics solutions.',
      features: ['Business Intelligence', 'Data Visualization', 'Real-time Analytics', 'Custom Dashboards'],
      href: '/data-analytics'
    },
    {
      icon: GlobeAltIcon,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with the latest technologies.',
      features: ['React Applications', 'Progressive Web Apps', 'E-commerce Solutions', 'API Development'],
      href: '/web-development'
    },
    {
      icon: RocketLaunchIcon,
      title: 'Digital Transformation',
      description: 'Complete digital transformation strategies and implementation services.',
      features: ['Process Automation', 'Digital Strategy', 'Change Management', 'Technology Integration'],
      href: '/digital-transformation'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We analyze your current systems and identify opportunities for improvement.'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'We develop a comprehensive strategy tailored to your business goals.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We execute the solution with precision and attention to detail.'
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'We continuously monitor and optimize for maximum performance.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including AI solutions, cloud services, cybersecurity, and digital transformation." />
        <meta name="keywords" content="AI services, cloud services, cybersecurity, data analytics, web development, digital transformation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth 
                and digital transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 hover:bg-white/20 transition-colors group">
                  <div className="text-blue-400 mb-6 flex justify-center">
                    <service.icon className="w-16 h-16 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to={service.href}>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center">
                      Learn More
                      <ArrowRightIcon className="w-5 h-5 ml-2" />
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We follow a proven methodology to ensure successful project delivery
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-white/20">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Let's discuss how our services can help transform your business and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                    Get Started Today
                    <ArrowRightIcon className="w-5 h-5 ml-2 inline" />
                  </button>
                </Link>
                <Link to="/about">
                  <button className="border border-white/30 text-white hover:bg-white/10 font-bold py-3 px-8 rounded-lg transition-colors">
                    Learn More About Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-ce9c

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Zap, Target, Users, BarChart } from 'lucide-react';

const DigitalTransformationPage: React.FC = () => {
  const transformationServices = [
    {
      title: 'Process Automation & Optimization',
      description: 'Transform manual processes into automated, efficient workflows that reduce costs and improve accuracy.',
      icon: '⚡',
      price: '$2,200/month',
      features: [
        'Process Analysis & Mapping',
        'Workflow Automation',
        'RPA Implementation',
        'Integration Solutions',
        'Performance Monitoring',
        'Continuous Improvement'
      ],
      benefits: [
        'Reduce process time by 70%',
        'Eliminate human errors by 90%',
        'Lower operational costs by 40%',
        'Improve customer satisfaction'
      ],
      marketPrice: '$4,500-9,000/month',
      category: 'Process Automation',
      technologies: ['RPA', 'Workflow Engines', 'API Integration', 'Machine Learning', 'Cloud Platforms'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Cloud Migration & Modernization',
      description: 'Seamlessly migrate your infrastructure to the cloud and modernize your applications for better performance.',
      icon: '☁️',
      price: '$2,800/month',
      features: [
        'Cloud Strategy & Planning',
        'Application Migration',
        'Data Migration',
        'Security Implementation',
        'Performance Optimization',
        'Cost Management'
      ],
      benefits: [
        'Reduce infrastructure costs by 30%',
        'Improve scalability and flexibility',
        'Enhance security and compliance',
        'Enable remote work capabilities'
      ],
      marketPrice: '$6,000-12,000/month',
      category: 'Cloud Migration',
      technologies: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Data-Driven Decision Making',
      description: 'Implement advanced analytics and business intelligence solutions to make data-driven decisions.',
      icon: '📊',
      price: '$2,500/month',
      features: [
        'Data Strategy Development',
        'Analytics Platform Setup',
        'Dashboard Creation',
        'Predictive Analytics',
        'Data Governance',
        'Training & Support'
      ],
      benefits: [
        'Improve decision accuracy by 60%',
        'Identify new business opportunities',
        'Optimize operations and costs',
        'Enhance competitive advantage'
      ],
      marketPrice: '$5,000-10,000/month',
      category: 'Data Analytics',
      technologies: ['Power BI', 'Tableau', 'Python', 'R', 'SQL', 'Machine Learning'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Digital Transformation Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive digital transformation services. Process automation, cloud migration, data analytics, and business modernization solutions." />
        <meta name="keywords" content="digital transformation, process automation, cloud migration, business modernization, digital strategy" />
        <link rel="canonical" href="https://ziontechgroup.com/digital-transformation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Transformation</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with comprehensive digital solutions that modernize processes, improve efficiency, and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
                >
                  Get Started
                </a>
                <a
                  href="/demo"
                  className="border border-indigo-400 text-indigo-400 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300"
                >
                  View Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transformation Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of digital transformation services designed to modernize your business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {transformationServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-indigo-400/50 transition-all duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-indigo-400">{service.price}</span>
                      <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                    </div>
                    <span className="text-sm text-green-400 bg-green-400/20 px-2 py-1 rounded">
                      {service.category}
                    </span>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <TrendingUp className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm text-gray-400 mb-4">{service.contactInfo}</p>
                    <a
                      href="/contact"
                      className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-lg font-semibold text-center block hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-500/20 to-purple-500/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join industry leaders who trust our digital transformation expertise to modernize their operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
              >
                Start Your Transformation
              </a>
              <a
                href="tel:+13024640950"
                className="border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DigitalTransformationPage;
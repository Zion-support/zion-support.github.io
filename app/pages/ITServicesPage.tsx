import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Server, Cloud, Shield, Wrench, Monitor, Database } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const services = [
    {
      icon: Server,
      title: 'Infrastructure Management',
      description: 'Comprehensive IT infrastructure setup, maintenance, and optimization for maximum performance.',
      features: [
        'Server setup and configuration',
        'Network design and implementation',
        'Hardware procurement and management',
        'Performance monitoring and optimization'
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Complete cloud migration, management, and optimization services for modern businesses.',
      features: [
        'Cloud migration planning and execution',
        'Multi-cloud strategy development',
        'Cost optimization and management',
        'Cloud security and compliance'
      ]
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your business from cyber threats and vulnerabilities.',
      features: [
        'Security assessment and auditing',
        'Threat detection and response',
        'Security policy development',
        'Compliance and regulatory support'
      ]
    },
    {
      icon: Wrench,
      title: 'Technical Support',
      description: '24/7 technical support and maintenance services to keep your systems running smoothly.',
      features: [
        'Round-the-clock monitoring',
        'Rapid incident response',
        'Preventive maintenance',
        'User training and support'
      ]
    },
    {
      icon: Monitor,
      title: 'System Integration',
      description: 'Seamless integration of disparate systems and applications for improved efficiency.',
      features: [
        'API development and integration',
        'Legacy system modernization',
        'Data migration services',
        'Custom integration solutions'
      ]
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Comprehensive data management solutions including backup, recovery, and analytics.',
      features: [
        'Database design and optimization',
        'Data backup and recovery',
        'Data analytics and reporting',
        'Data governance and compliance'
      ]
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Assessment',
      description: 'We analyze your current IT infrastructure and identify areas for improvement.'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'We develop a comprehensive strategy tailored to your business needs and goals.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We execute the plan with minimal disruption to your business operations.'
    },
    {
      step: '04',
      title: 'Support',
      description: 'We provide ongoing support and maintenance to ensure optimal performance.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including infrastructure management, cloud solutions, cybersecurity, and technical support for businesses of all sizes." />
        <meta name="keywords" content="IT services, infrastructure management, cloud solutions, cybersecurity, technical support, system integration" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              IT Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive technology solutions for modern businesses
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              From infrastructure management to cybersecurity, we provide end-to-end IT services 
              that keep your business running smoothly and securely.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer a comprehensive range of IT services designed to meet your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="w-16 h-16 mb-6 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl flex items-center justify-center">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-gray-300">
                      <span className="text-purple-400 mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a proven methodology to deliver exceptional IT services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Why Choose Our IT Services?
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  We combine technical expertise with business acumen to deliver IT solutions 
                  that drive real business value.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Expert Team</h3>
                      <p className="text-gray-300">Certified professionals with years of experience in enterprise IT solutions.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
                      <p className="text-gray-300">Round-the-clock monitoring and support to ensure maximum uptime.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Scalable Solutions</h3>
                      <p className="text-gray-300">IT infrastructure that grows with your business needs.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Cost Effective</h3>
                      <p className="text-gray-300">Optimized solutions that reduce costs while improving performance.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-600/20 to-cyan-600/20 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Ready to Get Started?</h3>
                <p className="text-gray-300 mb-6">
                  Let's discuss your IT needs and how we can help optimize your technology infrastructure.
                </p>
                <div className="space-y-4">
                  <a 
                    href="/contact" 
                    className="block w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
                  >
                    Get Free Consultation
                  </a>
                  <a 
                    href="/pricing" 
                    className="block w-full border-2 border-purple-400 text-purple-300 px-6 py-3 rounded-lg font-semibold text-center hover:bg-purple-400 hover:text-white transition-all duration-300"
                  >
                    View Pricing
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ITServicesPage;
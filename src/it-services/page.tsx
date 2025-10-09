import React from 'react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'Cloud Services',
      description: 'Comprehensive cloud migration, setup, and optimization services for AWS, Azure, and Google Cloud.',
      icon: Cloud,
      features: ['Cloud Migration', 'Infrastructure Setup', 'Cost Optimization', 'Security Configuration'],
      price: 'Starting at $1,299/month'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions with threat detection, prevention, and compliance management.',
      icon: Shield,
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response'],
      price: 'Starting at $1,599/month'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development workflows with automated testing and deployment pipelines.',
      icon: Settings,
      features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup'],
      price: 'Starting at $1,199/month'
    },
    {
      title: 'Database Services',
      description: 'Database design, optimization, and management with AI-powered tuning and monitoring.',
      icon: Database,
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening'],
      price: 'Starting at $899/month'
    },
    {
      title: 'Network Services',
      description: 'Network design, implementation, and monitoring solutions for enterprise environments.',
      icon: Wifi,
      features: ['Network Design', 'Implementation', 'Monitoring', 'Troubleshooting'],
      price: 'Starting at $1,099/month'
    },
    {
      title: 'IT Infrastructure',
      description: 'Enterprise-grade IT infrastructure with 99.9% uptime guarantee and 24/7 support.',
      icon: Server,
      features: ['Server Management', 'Network Setup', 'Security Hardening', 'Backup Solutions'],
      price: 'Starting at $999/month'
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Proven ROI',
      description: 'Average 300% ROI with measurable business impact and cost savings'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance for all solutions and data'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock support and monitoring for all services'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'World-class engineers and data scientists with proven track records'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="IT Services - Zion Tech Group"
        description="Comprehensive IT infrastructure and digital transformation services for enterprise organizations."
        keywords={['IT services', 'cloud migration', 'cybersecurity', 'DevOps', 'database services', 'network services']}
        canonicalUrl="https://ziontechgroup.com/it-services"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="container mx-auto relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                IT Services & Solutions
              </h1>
              <p className="text-xl md:text-2xl text-blue-400 mb-8">
                Comprehensive IT Infrastructure & Digital Transformation
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Our IT services provide enterprise-grade infrastructure, cloud solutions, cybersecurity, 
                and digital transformation services to help your business scale and succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#services"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105"
                >
                  View Services
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
                >
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Our IT Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300">
                  <service.icon className="w-12 h-12 text-blue-400 mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-2xl font-bold text-blue-400 mb-4">{service.price}</div>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-center block"
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Why Choose Our IT Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300">
                  <benefit.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Get started with our IT services today and see the difference professional IT management can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ITServicesPage;

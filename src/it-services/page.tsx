import React from 'react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'Cloud Services',
      description: 'Comprehensive cloud migration, setup, and optimization services for AWS, Azure, and Google Cloud.',
      icon: Cloud,
      features: ['Cloud migration', 'Infrastructure setup', 'Cost optimization', 'Security configuration', 'Monitoring', '24/7 support'],
      price: 'Starting at $1,500/month',
      category: 'Infrastructure',
      benefits: ['Scalable infrastructure', 'Reduced costs', 'Improved performance', 'Enhanced security'],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Kubernetes', 'Docker'],
      color: 'text-blue-400'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions with threat detection, prevention, and compliance management.',
      icon: Shield,
      features: ['Threat detection', 'Vulnerability assessment', 'Security monitoring', 'Incident response', 'Compliance management', 'Security training'],
      price: 'Starting at $1,200/month',
      category: 'Security',
      benefits: ['Enhanced security posture', 'Compliance assurance', 'Risk mitigation', '24/7 monitoring'],
      technologies: ['SIEM', 'EDR', 'Firewall', 'VPN', 'MFA', 'Encryption'],
      color: 'text-red-400'
    },
    {
      title: 'IT Infrastructure',
      description: 'Enterprise-grade IT infrastructure with 99.9% uptime guarantee and comprehensive support.',
      icon: Server,
      features: ['Server management', 'Network setup', 'Security hardening', 'Backup solutions', 'Performance monitoring', 'Disaster recovery'],
      price: 'Starting at $999/month',
      category: 'Infrastructure',
      benefits: ['High availability', 'Scalable solutions', 'Cost efficiency', 'Expert support'],
      technologies: ['Windows Server', 'Linux', 'VMware', 'Hyper-V', 'Active Directory', 'Exchange'],
      color: 'text-green-400'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development workflows with automated testing, deployment, and monitoring.',
      icon: Code,
      features: ['CI/CD pipelines', 'Automated testing', 'Container orchestration', 'Monitoring setup', 'Version control', 'Release management'],
      price: 'Starting at $1,399/month',
      category: 'Development',
      benefits: ['Faster deployments', 'Improved quality', 'Reduced errors', 'Better collaboration'],
      technologies: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'Ansible', 'Terraform'],
      color: 'text-purple-400'
    },
    {
      title: 'Database Management',
      description: 'Database design, optimization, and management with AI-powered tuning and monitoring.',
      icon: Database,
      features: ['Database design', 'Performance tuning', 'Backup & recovery', 'Security hardening', 'Migration services', '24/7 monitoring'],
      price: 'Starting at $899/month',
      category: 'Data',
      benefits: ['Optimized performance', 'Data security', 'Reliable backups', 'Expert management'],
      technologies: ['SQL Server', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'],
      color: 'text-yellow-400'
    },
    {
      title: 'Network Solutions',
      description: 'Network design, implementation, and monitoring solutions for optimal performance and security.',
      icon: Wifi,
      features: ['Network design', 'Implementation', 'Monitoring', 'Troubleshooting', 'Security configuration', 'Performance optimization'],
      price: 'Starting at $1,099/month',
      category: 'Infrastructure',
      benefits: ['Reliable connectivity', 'Enhanced security', 'Optimal performance', 'Scalable solutions'],
      technologies: ['Cisco', 'Juniper', 'Fortinet', 'Aruba', 'Ubiquiti', 'Meraki'],
      color: 'text-cyan-400'
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
        description="Professional IT services including cloud migration, cybersecurity, infrastructure management, and DevOps solutions for your business transformation."
        keywords={['IT services', 'cloud migration', 'cybersecurity', 'DevOps', 'infrastructure', 'business transformation']}
        canonicalUrl="https://ziontechgroup.com/it-services"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                IT Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to transform your business operations and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105"
              >
                Get Started Today
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                (302) 464-0950
              </a>
            </div>
          </div>
        </section>

          {/* Main Services Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Core IT Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-cyan-400 mb-4">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-2xl font-bold ${service.color}`}>{service.price}</span>
                    <a
                      href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                      className={`inline-flex items-center text-sm font-medium ${service.color} hover:opacity-80 transition-opacity`}
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

          {/* Benefits Section */}
          <section className="py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Choose Our IT Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300 cyber-card">
                  <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Get started with our IT services today and see the difference professional IT solutions can make.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Call (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
                >
                  Email Us
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
      <Footer />
    </>
  );
};

export default ITServicesPage;
